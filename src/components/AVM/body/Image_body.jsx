import React from 'react'
import Image from 'next/image'

import photo1_bg from '@/assets/avm_top_banner.svg'
import photo2_bg from '@/assets/final_avm_top_banner-svg.png'
import zIndex from '@mui/material/styles/zIndex'



function Image_body() {
  return (
<>
    <div className='bg-[#38373c] border-b-4 border-red-700'>
      <div className="container bg-local bg-center bg-contain z-10 w-vw h-[40vh] flex justify-start items-center" style={{backgroundImage:'url("https://realtor.com.cy/assets/images/avm_top_banner.svg")', backgroundRepeat:'no-repeat'}}>
      <div className='text-white w-[37%] z-10'>
           <h2 className='text-3xl my-6'>Property Market Intelligence</h2>
           <p className='text-sm'>
           Realtor Globally provides reliable and revolutionary AVM designed for analysts, consultants and real estate teams to create a more positive customer experience! Deliver values by using our selective & efficient cascade methodologies. The next step forward in automated valuation models (AVMs)
           </p>
          </div>
      </div>
    </>
  )

}

export default Image_body

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
// {/* <div className='bg-[#38373c]'>

//       <div className="mx-auto w-[50vw] h-80 flex  align-middle items-center bg-[#38373c] ">
//         <div className="container absolute z-0 mx-auto overflow-hidden">
//             <Image
//                 src={photo1_bg}
//                 objectFit="cover"
//                 quality={100}
//                 width={900}
//             />
//         </div>
//         <div className='text-white w-[37%] z-10'>
//           <h2 className='text-3xl my-6'>Property Market Intelligence</h2>
//           <p className='text-sm'>
//           Realtor Globally provides reliable and revolutionary AVM designed for analysts, consultants and real estate teams to create a more positive customer experience! Deliver values by using our selective & efficient cascade methodologies. The next step forward in automated valuation models (AVMs)
//           </p>
//          </div>
//     </div>
// </div> */}