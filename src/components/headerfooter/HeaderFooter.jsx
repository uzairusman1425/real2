import React from 'react'
import Header from '@/components/header/Header'
import Footer from '../footer/Footer'


function Headerfooter({children,page}) {
  return (
    <div className='flex flex-col h-[100vh] w-[100vw] overflow-auto overflow-x-hidden '>
        <Header page={page} />
        <div className='flex-grow'>
            {children}
        </div>
        <Footer/>
    </div>   
       
  )
}

export default Headerfooter