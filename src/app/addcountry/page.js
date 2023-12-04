import React from 'react'
import PropertyType from '../../components/admin/PropertyType/PropertyType';
import Navbar from '../../components/admin/PropertyType/Navbar'


function page() {
  



  return (
      <>

        <Navbar page={'addcountry'}/>
        <div className='w-screen  bg-[#38373c] flex justify-center'>

          <div className=''>
            <form action="" className='container flex justify-center'>
              <input type="text" name="country" id="country" className='m-2 p-4 rounded-lg w-[49%] border-2' placeholder='Add Country'/>
              <input type="text" name="city" id="city" className='m-2 p-4 rounded-lg w-[49%] border-2' placeholder='Add City'/>
              <input type="button" value="Submit" className='bg-white w-52 h-20 rounded-2xl m-2 p-4 cursor-pointer hover:bg-gray-500 hover:text-white text-xl font-semibold' />    
            </form>
                <PropertyType/>
          </div>
        </div>
        
      </>
    )
}

export default page