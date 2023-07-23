import React from 'react'
import CollectionCard from '../CollectionCard/CollectionCard'
const Collection = () => {
  return (
    <section className='collection'>
      <CollectionCard image="src/assets/images/basket.png"/>
      <CollectionCard image="src/assets/images/foot.png"/>
      <CollectionCard image="src/assets/images/tennis.png"/>
      <CollectionCard image="src/assets/images/volley.png"/>
    </section>
  )
}

export default Collection