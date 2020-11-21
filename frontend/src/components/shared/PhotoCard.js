import React from 'react'
import Card from 'react-bootstrap/Card'

const PhotoCard = ({ file }) => {
  return (
    <Card className="p-3">
      <img
        className="w-100"
        src={file}
      />
    </Card>
  )
}

export default PhotoCard
