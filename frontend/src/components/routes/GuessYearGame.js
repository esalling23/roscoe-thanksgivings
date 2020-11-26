import React, { useState, useEffect } from 'react'
import { knuthShuffle } from 'knuth-shuffle'
import { getPhotos } from '../../api/photos'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'

import PhotoCard from '../shared/PhotoCard'

const GuessYearGame = () => {
  const [photos, setPhotos] = useState(null)
  const [currentPhoto, setCurrentPhoto] = useState(null)
  const [guess, setGuess] = useState('')
  const [hasGuessed, setHasGuessed] = useState(false)
  const [photoLoaded, setPhotoLoaded] = useState(false)
  const [loading, setLoading] = useState(false)

  // on mount, load random photo
  useEffect(() => {
    getPhotos()
      .then(res => getRandomPhoto(res.photos))
      .catch(console.error)
  }, [])

  useEffect(() => {
    if (photoLoaded) {
      setHasGuessed(false)
      setGuess('')
      setLoading(false)
    }
  }, [photoLoaded])

  const getRandomPhoto = (photoArr) => {
    setLoading(true)
    const shuffledPhotos = knuthShuffle(photoArr.slice(0))
    const newPhoto = shuffledPhotos.pop()
    setPhotos(shuffledPhotos)
    setCurrentPhoto(newPhoto)
    setPhotoLoaded(false)
  }

  const handleGuessChange = (event) => setGuess(event.target.value)

  const handleGuessSubmit = () => setHasGuessed(true)

  const handleReplay = () => getRandomPhoto(photos)

  const handlePhotoLoad = () => setPhotoLoaded(true)

  const guessFormJsx = (
    <Form onSubmit={handleGuessSubmit} className="d-inline">
      <Form.Row>
        <Col sm="8">
          <FormControl
            className="d-inline my-2"
            value={guess}
            onChange={handleGuessChange}
            placeholder="Guess the year here"
          />
        </Col>
        <Col sm="4">
          <Button type="submit" className="my-2">Submit</Button>
        </Col>
      </Form.Row>
    </Form>
  )

  let gameJsx = guessFormJsx

  if (currentPhoto) {
    const winMessage = guess === currentPhoto.year ? (
      <h4>You got it!</h4>
    ) : (
      <React.Fragment>
        <h3>So close!</h3>
        <h4>The correct answer was {currentPhoto.year}</h4>
      </React.Fragment>
    )
    const playAgainJsx = (
      <div>
        <React.Fragment>{winMessage}</React.Fragment>
        <Button onClick={handleReplay}>Play Again</Button>
      </div>
    )

    gameJsx = (
      <React.Fragment>
        { hasGuessed ? playAgainJsx : guessFormJsx }
      </React.Fragment>
    )
  }

  const loadingJsx = (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  )

  // const loadingJsx = 'Loading...'

  return (
    <div className="mx-auto">
      <div className="guess-game pt-3 px-3 mb-2">
        <Row className="d-flex m-auto justify-content-center">
          <h3>During which year was this Thanksgiving photo taken?</h3>
          <p>Guess below!</p>
        </Row>
      </div>
      <div className="guess-game py-3 px-3">
        <Row className={`d-flex p-3 m-auto justify-content-center align-items-center`}>
          {loading ? loadingJsx : gameJsx}
        </Row>
        <Row className="p-3">
          <Col className="m-auto" md="10" lg="8">
            {currentPhoto && (
              <PhotoCard
                file={currentPhoto.file}
                onLoad={handlePhotoLoad}
              />
            )}
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default GuessYearGame
