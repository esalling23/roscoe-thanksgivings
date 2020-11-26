import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Home = () => (
  <Row>
    <Col className="home-page m-auto p-5" sm="8">
      <h1>Happy Thanksgiving</h1>
      <p>The yearly Thanksgiving celebration on the hill is special, a time we look forward to every fall. Even though we can't come together this Thanksgiving, that doesn't mean we have to be far apart.</p>
      <p>While this year we keep our distance, I hope these photos of years past keep us close.</p>
      <Row md="2" className="mt-5">
        <Col>
          <Button href="#timeline">Timeline of Photos</Button>
        </Col>
        <Col>
          <Button href="#guess-year-game">Guess-the-year Photo Game</Button>
        </Col>
      </Row>
    </Col>
  </Row>
)

export default Home
