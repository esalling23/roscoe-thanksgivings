import React, { useState, useEffect } from 'react'
import { knuthShuffle } from 'knuth-shuffle'
import { getPhotos } from '../../api/photos'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'

import PhotoCard from '../shared/PhotoCard'

const GuessYearGame = () => {
  const [photos, setPhotos] = useState(null)
  const [currentPhoto, setCurrentPhoto] = useState(null)
  const [guess, setGuess] = useState('')
  const [hasGuessed, setHasGuessed] = useState(false)
  const [photoLoaded, setPhotoLoaded] = useState(false)

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
    }
  }, [photoLoaded])

  const getRandomPhoto = (photoArr) => {
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

  return (
    <Row className="w-75">
      <Col md="8">
        <h2>Guess the Thanksgiving Year</h2>
        {currentPhoto && (
          <PhotoCard
            file={currentPhoto.file}
            onLoad={handlePhotoLoad}
          />
        )}
      </Col>
      <Col md="4" className="d-flex flex-column-reverse">
        {hasGuessed ? (
          <div>
            <h4>{guess === currentPhoto.year ? 'You got it!' : 'Not quite :/ \nThe correct answer was ' + currentPhoto.year}</h4>
            <Button onClick={handleReplay}>Play Again</Button>
          </div>
        ) : (
          <Form onSubmit={handleGuessSubmit} className="align-bottom d-inline">
            <FormControl value={guess} onChange={handleGuessChange}/>
            <Button type="submit">Guess</Button>
          </Form>
        )}
      </Col>
    </Row>
  )
}

export default GuessYearGame
