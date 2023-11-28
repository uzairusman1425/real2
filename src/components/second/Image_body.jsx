import React from 'react'
import Image from 'next/image'

import photo1_bg from '@/assets/avm_top_banner.svg'



function Image_body() {
  return (
    // <div id="image" className='w-[70%] mx-auto items-center'>
    //       {/* <Image src={property} className='w-screen ' alt='No picture found'/> */}
    //       <h1 className='text-4xl h-[100%] text-white relative'>Checking if text on div</h1>
    //       <div className=''  style={{
    //         position: "relative",
    //         zIndex: -1,
    //         width: "100%"
    //       }}>

    //         <Image src={photo1_bg} className='container mx-auto'/>
    //       </div>
    //   </div>

      <div className="mx-auto w-[60%] h-80 flex  align-middle items-center">
        <div className="container absolute -z-10 mx-auto">
            <Image
                src={photo1_bg}
                objectFit="cover"
                quality={100}
            />
        </div>
        <div className='text-white w-[37%]'>
          <h2 className='text-3xl my-6'>Property Market Intelligence</h2>
          <p className='text-sm'>
          Realtor Globally provides reliable and revolutionary AVM designed for analysts, consultants and real estate teams to create a more positive customer experience! Deliver values by using our selective & efficient cascade methodologies. The next step forward in automated valuation models (AVMs)
          </p>
         </div>
    </div>
  )
}

export default Image_body