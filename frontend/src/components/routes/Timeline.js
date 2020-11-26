import React, { useEffect, useState } from 'react'
import { getPhotos } from '../../api/photos'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import YearSection from '../shared/YearSectionGrid'
import PhotoCard from '../shared/PhotoCard'

const Timeline = () => {
  const [photos, setPhotos] = useState(null)
  const [years, setYears] = useState(null)
  const [yearSortReverse, setYearSortReverse] = useState(false)
  const [overlayPhoto, setOverlayPhoto] = useState(null)

  useEffect(() => {
    getPhotos()
      .then(res => {
        setPhotos(groupByYear(res.photos))
      })
      .catch(console.error)
  }, [])

  useEffect(() => {
    if (photos) {
      sortPhotoYears()
    }
  }, [photos, yearSortReverse])

  // Sorts array of photo years old-new or new-old depending on `yearSortReverse` state
  const sortPhotoYears = () => {
    const sortedYears = Object.keys(photos).sort((a, b) => {
      if (yearSortReverse) {
        return b - a
      } else {
        return a - b
      }
    })
    setYears(sortedYears)
  }

  // Input: Array of photos from API
  // Output: Object with keys for each year & arrays of photos in that year
  const groupByYear = (all) => {
    return all.reduce((group, photo) => {
      if (group[photo.year]) {
        group[photo.year].push(photo)
      } else {
        group[photo.year] = [photo]
      }
      return group
    }, {})
  }

  const handleOverlayClose = () => setOverlayPhoto(null)
  const handleOverlayShow = (photo) => setOverlayPhoto(photo)

  return (
    <div className="mb-8">
      <Modal size="lg" show={overlayPhoto ? true : false} onHide={handleOverlayClose}>
        <Modal.Header className="px-5" closeButton>
          <h1>{overlayPhoto && overlayPhoto.year}</h1>
        </Modal.Header>
        <Modal.Body>{overlayPhoto && (
          <PhotoCard
            photo={overlayPhoto}
          />
        )}</Modal.Body>
      </Modal>
      <div className="d-flex justify-content-end">
        <Button
          onClick={() => setYearSortReverse(prev => !prev)}
          className="year-sort align-right"
        >
          {yearSortReverse ? 'Year 🔼' : 'Year 🔽'}
        </Button>
      </div>
      <div>
      {years && years.map(year => (
        <YearSection
          key={year}
          year={year}
          photos={photos[year]}
          handleOverlayShow={handleOverlayShow}
        />
      ))}
      </div>
    </div>
  )
}

export default Timeline
