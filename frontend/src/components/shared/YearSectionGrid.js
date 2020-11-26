import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import PhotoCard from './PhotoCard'

const YearSection = ({ year, photos, handleOverlayShow }) => {
  return (
    <section className="my-4">
      <h2 className="year-title">{year}</h2>
      <Row className="year-row pl-1 mb-2">
      {photos.map(photo => (
        <Col key={photo.id} className="my-3" sm="6" lg="4">
          <PhotoCard
            photo={photo}
            handleOverlayShow={handleOverlayShow}
          />
        </Col>
      ))}
      </Row>
    </section>
  )
}

export default YearSection
