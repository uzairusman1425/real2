"use client"
import Image_body from '../../components/AVM/body/Image_body'
import Selection from '../../components/AVM/body/Selection'
import Mapsection from '../../components/AVM/body/Mapsection'
import Stats from '../../components/AVM/body/Stats'
import Formdetails from '../../components/AVM/body/Formdetails'
import Headerfooter from '../../components/headerfooter/HeaderFooter'
import Geolocation from '../../components/GoolgeMap/Geolocation'


export default function Home() {




  return (
    <main className="flex overflow-hidden min-h-screen flex-col items-center justify-between">
      <div id='main' className='flex p-0 m-0 flex-col bg-white'>

        <Headerfooter page={'AVM'}>

          <Image_body />
          <Selection />
          <Mapsection />
          <Stats />
          <Geolocation />
          <Formdetails />


        </Headerfooter>





      </div>
    </main>
  )
}
