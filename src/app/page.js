"use client"


import { useEffect, useState } from 'react'


import Image_body from '@/components/second/Image_body'
import Selection from '@/components/second/Selection'
import Mapsection from '@/components/second/Mapsection'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Stats from '@/components/second/Stats'
import Formdetails from '@/components/second/Formdetails'



export default function page() {


  return (
    <main className="flex overflow-hidden min-h-screen flex-col items-center justify-between">
      <div id='main' className='flex p-0 m-0 flex-col'>
        <Header />
        <Image_body />
        <Selection />
        <Mapsection />
        <Stats />
        <Formdetails />

        <Footer />


      </div>
    </main>
  )
}
