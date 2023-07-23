import React from 'react'

const CollectionCard = ({ image }) => {
  return (
    <div className='collection-card'>
      <img src={image} alt="collection image" />
    </div>
  )
}

export default CollectionCard