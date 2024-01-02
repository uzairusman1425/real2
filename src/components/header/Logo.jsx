import Image from 'next/image'
import React from 'react'
import photo1 from '../../assets/cropped-new_gold-1536x439.png'


function Logo() {
  return (
    <div className='relative'>
      <div id="LOGO" className='absolute h-20 flex items-center pl-3 sm:pl-10 py-10 z-[999] '>
            <Image src={photo1} width={200} height={200} className='sm:w-[50%] w-[40%]' alt='logo' />
          </div>
    </div>
  )
}

export default Logo