import React from 'react'
import Card from 'react-bootstrap/Card'

const PhotoCard = ({ photo, onLoad, handleOverlayShow }) => {
  return (
    <Card className="p-3" onClick={() => handleOverlayShow(photo)}>
      <img
        className="w-100"
        src={photo.file}
        onLoad={onLoad}
      />
    </Card>
  )
}

export default PhotoCard
