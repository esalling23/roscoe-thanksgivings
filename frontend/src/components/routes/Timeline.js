import React, { useEffect, useState } from 'react'
import { getPhotos } from '../../api/photos'

import Button from 'react-bootstrap/Button'

import YearSection from '../shared/YearSectionGrid'

const Timeline = () => {
  const [photos, setPhotos] = useState(null)
  const [years, setYears] = useState(null)
  const [yearSortReverse, setYearSortReverse] = useState(false)

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

  return (
    <React.Fragment>
      <div className="d-flex justify-content-end">
        <Button
          onClick={() => setYearSortReverse(prev => !prev)}
          className="align-right"
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
        />
      ))}
      </div>
    </React.Fragment>
  )
}

export default Timeline
