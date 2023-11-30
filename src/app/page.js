import Main from '@/components/Home/Main'
import Headerfooter from '@/components/headerfooter/HeaderFooter'
import React from 'react'
const page = () => {
  return (
    <>
    <Headerfooter page={'home'}>
    <Main/>
      
    </Headerfooter>
    </>
  )
}

export default page
