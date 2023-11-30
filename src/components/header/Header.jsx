import React from 'react'
import Logo from '@/components/header/Logo'
import Navbar from '@/components/header/Navbar'

function Header({page}) {
  return (
    <>
        <Logo/>
        <Navbar page={page}/>
    </>
  )
}

export default Header