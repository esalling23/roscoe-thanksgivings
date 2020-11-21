import React from 'react'
import CardColumns from 'react-bootstrap/CardColumns'

import PhotoCard from './PhotoCard'

const YearSection = ({ year, photos }) => {
  return (
    <section className="year-section">
      <h3 className="year-title">{year}</h3>
      <CardColumns>
        {photos.map(photo => (
          <PhotoCard
            key={photo.id}
            file={photo.file}
          />
        ))}
      </CardColumns>
    </section>
  )
}

export default YearSection
