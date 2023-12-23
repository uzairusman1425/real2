import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import wave from '../../assets/wave.svg'
import wave2 from '../../assets/wave2.svg'
import { Fullscreen } from '@mui/icons-material'


function index({page}) {
  return (
    <div className='sticky top-0'>

      <div className='relative w-screen bg-[#f6f8f5]'>
        <div id="navbar" className='container flex items-center justify-end w-screen h-20 '>
              <Link href="/" className= {page==='home'?"mx-2  text-[#3a5172] font-medium border-b-[1px]  px-3 py-3 pb-1 border-b-[#3a5172] z-50":"mx-2 hover:text-[#3a5172] hover:font-normal hover:border-b-[#3a5172] hover:border-b-[1px] text-[#7a7a7a] font-light   px-3 py-3 pb-1  border-b-[#f6f8f5] z-50"} >Home</Link>
              <Link href="/AVM" className= {page==='AVM'? "mx-2 text-[#3a5172] font-medium border-b-[1px] px-3 py-3 pb-1  border-b-[#3a5172] z-50": "mx-2 hover:text-[#3a5172] hover:font-normal hover:border-b-[#3a5172] hover:border-b-[1px]  text-[#7a7a7a] font-light  px-3 py-3 pb-1  border-b-[#f6f8f5] z-50"}>AVM</Link>
        </div>
        <div>
          <Image src={wave} width={Fullscreen} className='absolute -top-24 -z-10 min-w-[100vw] ' style={{transform:"scale(-1,1)",fill:"black",color: "black"}} />
          <Image src={wave2} width={Fullscreen} className='absolute -top-24 z-20 right-0 min-w-[100vw] ' style={{opacity:"0.4",fill:"black",color: "black",translate:"translateX(1000px)"}} />
          <Image src={wave2} width={Fullscreen} className='absolute -top-24 z-20 right-0 min-w-[100vw]  ' style={{opacity:"0.4",fill:"black",color: "black",translate:"translateX(1px)"}} />
        </div>

      </div>
    </div>
  )
}

export default index