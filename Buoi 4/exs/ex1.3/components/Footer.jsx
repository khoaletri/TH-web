import React from 'react'
import Logo from '../img/logo.PNG'


const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="logo" />
      <span>
        Made with ❤ and <b>Your Mom</b>
      </span>
    </footer>
  )
}

export default Footer