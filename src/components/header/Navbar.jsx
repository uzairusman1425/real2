import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import wave from '../../assets/image__6_-removebg-preview.png'
import wave2 from '../../assets/image__6_-removebg-preview.png'
import { Fullscreen } from '@mui/icons-material'


function index({page}) {
  return (
    <div className='sticky top-0'>

      <div className='relative w-screen bg-[#f6f8f5]'>
        <div id="navbar" className='container flex items-center justify-end w-screen h-20 '>
              <Link href="/" className= {page==='home'?"mx-2  text-[#3a5172] font-medium border-b-[1px]  px-3 py-3 pb-1 border-b-[#3a5172] z-50":"mx-2 hover:text-[#3a5172] hover:font-normal hover:border-b-[#3a5172] hover:border-b-[1px] text-[#7a7a7a] font-light   px-3 py-3 pb-1  border-b-[#f6f8f5] z-50"} >Home</Link>
              <Link href="/AVM" className= {page==='AVM'? "mx-2 text-[#3a5172] font-medium border-b-[1px] px-3 py-3 pb-1  border-b-[#3a5172] z-50": "mx-2 hover:text-[#3a5172] hover:font-normal hover:border-b-[#3a5172] hover:border-b-[1px]  text-[#7a7a7a] font-light  px-3 py-3 pb-1  border-b-[#f6f8f5] z-50"}>AVM</Link>
        </div>
        <div className=''>
          <Image src={wave} alt="wave" width={Fullscreen}  className='navbarimage absolute -top-24 z-10 md:min-w-[105vw] sm:min-w-[216vw] min-w-[232vw] sm:h-[24vh] h-[20vh] ' style={{transform:"scale(-1,1)",fill:"black",color: "black",opacity:'0.5'}} />
          <Image src={wave2} alt="wave" width={Fullscreen}  className='navbarimage absolute -top-24 z-20 right-0 md:min-w-[105vw] sm:min-w-[216vw] min-w-[232vw] sm:h-[24vh] h-[19vh] ' style={{opacity:"0.2",fill:"black",color: "black",translate:"translateX(1000px)",}} />
          <Image src={wave2} alt="wave" width={Fullscreen}  className='navbarimage absolute -top-24 z-20 right-0 md:min-w-[105vw] sm:min-w-[216vw] min-w-[232vw] sm:h-[24vh] h-[19vh]  ' style={{opacity:"0.2",fill:"black",color: "black",translate:"translateX(1px)",}} />
        </div>

      </div>
    </div>
  )
}

export default index