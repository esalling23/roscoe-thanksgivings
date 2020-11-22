import React from 'react'
import Card from 'react-bootstrap/Card'

const PhotoCard = ({ file, onLoad }) => {
  return (
    <Card className="p-3">
      <img
        className="w-100"
        src={file}
        onLoad={onLoad}
      />
    </Card>
  )
}

export default PhotoCard
