"use client"
import Image_body from '../../components/AVM/body/Image_body'
import Selection from '../../components/AVM/body/Selection'
import Mapsection from '../../components/AVM/body/Mapsection'
import Stats from '../../components/AVM/body/Stats'
import Formdetails from '../../components/AVM/body/Formdetails'
import Headerfooter from '../../components/headerfooter/HeaderFooter'
import Geolocation from '../../components/GoolgeMap/Geolocation'
import UserContext from '../../context/UserContext'
import { useContext } from 'react'
export default function Home() {

  const { name } = useContext(UserContext)


  return (
    <main className="flex overflow-hidden min-h-screen flex-col items-center justify-between">
      <div id='main' className='flex p-0 m-0 flex-col bg-white'>

        <Headerfooter page={'AVM'}>

          <Image_body />
          <Selection />
          <Mapsection />
          <Stats />

          <Formdetails />


        </Headerfooter>





      </div>
    </main>
  )
}
