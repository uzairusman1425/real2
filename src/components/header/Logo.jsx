import Image from 'next/image'
import React from 'react'
import photo1 from '@/assets/logo_global.png'


function Logo() {
  return (
    <div id="LOGO" className='w-screen h-20 bg-white flex items-center pl-10 py-10'>
          <Image src={photo1} width={150} height={150} className='' alt='logo' />
        </div>
  )
}

export default Logo