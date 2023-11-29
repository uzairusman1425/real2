import React from 'react'
import Header from '@/components/header/Header'
import Footer from '../footer/Footer'


function Headerfooter({children}) {
  return (
    <div className='flex flex-col h-[100vh] overflow-auto'>
        <Header/>
        <div className='flex-grow'>
            {children}
        </div>
        <Footer/>
    </div>   
       
  )
}

export default Headerfooter