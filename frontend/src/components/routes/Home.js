import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Home = () => (
  <Row>
    <Col className="home-page m-auto p-5" sm="10">
      <h1>Happy Thanksgiving!</h1>
      <p>The yearly Thanksgiving celebration on the hill is special, a time we look forward to every fall. Even though we can't come together this Thanksgiving, that doesn't mean we have to be far apart.</p>
      <p>While we keep our distance this year, I hope these photos of years past help us feel close together in spirit.</p>
      <div className="d-flex align-items-center justify-content-center mt-5">
        <Button className="mx-3" href="#timeline">Timeline of Photos</Button>
        <Button className="mx-3" href="#guess-year-game">Guess-the-year Photo Game</Button>
      </div>
      <img className="mx-auto mt-5 w-50" src="https://roscoethanksgiving.s3.amazonaws.com/resources/kisspng-turkey-meat-thanksgiving-free-content-clip-art-dancing-turkey-clipart-5aac8391cea9b1.9024518715212553138465.png"/>
    </Col>
  </Row>
)

export default Home
