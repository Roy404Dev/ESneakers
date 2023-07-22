import React from 'react'
import Button from '../Buttons/Button';
import searchIcon from '../../assets/icons/search.svg';
const Hero = () => {
  return (
    <section className='hero'>
      <form action="#">
        <input type="text" placeholder='Categories'/>
        <Button style={{backgroundColor: "#EA524D", border: "none"}}>
          <img src={searchIcon} alt="search icon" />
        </Button>
      </form>
    </section>
  )
}

export default Hero