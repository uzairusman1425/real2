import Image from 'next/image'
import React from 'react'
import photo1 from '@/assets/logo_global.png'

function Terms_conditions() {
  return (
    <div className='bg-gray-200'>
      <div className='h-16  flex justify-between border-t-2 items-center ml-10 ' >
          
          <Image src={photo1} width={150} height={150} className='' />
          <a href=''><p className='mr-10'>Terms and conditions</p></a>
      </div>
    </div>
  )
}

export default Terms_conditions