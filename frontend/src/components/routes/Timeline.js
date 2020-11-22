import React, { useEffect, useState } from 'react'
import { getPhotos } from '../../api/photos'

import YearSection from '../shared/YearSection'

const Timeline = () => {
  const [photos, setPhotos] = useState(null)

  useEffect(() => {
    getPhotos()
      .then(res => {
        console.log(res)
        setPhotos(groupByYear(res.photos))
      })
      .catch(console.error)
  }, [])

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
      {photos && Object.keys(photos).map(year => (
        <YearSection
          key={year}
          year={year}
          photos={photos[year]}
        />
      ))}
    </React.Fragment>
  )
}

export default Timeline
