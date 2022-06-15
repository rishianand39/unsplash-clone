import React from 'react'

const PhotoCard = ({item}) => {
  return (
    <div>
      <img src={item.urls.small} alt="" />
    </div>
  )
}

export default PhotoCard