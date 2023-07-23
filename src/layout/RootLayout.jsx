import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Branding from '../components/Branding/Branding'
import Collection from '../components/Collection/Collection'
const RootLayout = () => {
  return (
    <>
      <Header />
      <Hero />
      <Branding />
      <Collection />
    </>
  )
}

export default RootLayout