import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import PhotoCard from './PhotoCard'

const YearSection = ({ year, photos }) => {
  return (
    <section className="my-4">
      <h3 className="year-title">{year}</h3>
      <Row className="year-row pl-1 mb-5">
      {photos.map(photo => (
        <Col key={photo.id} className="my-3" sm="6" md="4">
          <PhotoCard file={photo.file}/>
        </Col>
      ))}
      </Row>
    </section>
  )
}

export default YearSection
