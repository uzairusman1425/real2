import React from 'react'
import Logo from '../header/Logo'
import Navbar from '../header/Navbar'

function Header({page}) {
  return (
    <>
        <Logo/>
        <Navbar page={page}/>
    </>
  )
}

export default Header