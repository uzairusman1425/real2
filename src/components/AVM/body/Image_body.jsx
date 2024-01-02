import React from 'react'

function Image_body() {
  return (

    <div className='bg-[#38373c] border-b-4 border-[#eeeeee]'>
      <div className="container bg-local bg-center bg-contain z-10 w-vw h-[40vh] flex justify-start items-center" style={{backgroundImage:'url("https://realtor.com.cy/assets/images/avm_top_banner.svg")', backgroundRepeat:'no-repeat'}}>
      <div className='text-white w-[95%] ml-2 sm:w-[37%] z-10'>
           <h2 className='lg:text-3xl sm:text-2xl text-xl my-6'>Property Market Intelligence</h2>
           <p className='lg:text-sm text-xs '>
           Realtor Globally provides reliable and revolutionary AVM designed for analysts, consultants and real estate teams to create a more positive customer experience! Deliver values by using our selective & efficient cascade methodologies. The next step forward in automated valuation models (AVMs)
           </p>
          </div>
      </div>
   </div>
  )

}

export default Image_body