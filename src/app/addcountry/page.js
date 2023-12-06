'use client'
import React, { useEffect, useState } from 'react'
import PropertyType from '../../components/admin/PropertyType/PropertyType';
import Navbar from '../../components/admin/PropertyType/Navbar'
import ReactFlagsSelect from "react-flags-select";

function Page() {
  const [selected, setSelected] = useState("");
  useEffect(()=>{
    console.log(selected);
  },[selected])


  return (
      <>

        <Navbar page={'addcountry'}/>
        <div className='w-screen  bg-[#38373c] flex justify-center'>
          
          <div className=''>
            <form action="" className='container flex justify-center '>
              <ReactFlagsSelect 
                selected={selected}
                onSelect={(code) => setSelected(code)}
                placeholder="Select Country"
                searchable
                searchPlaceholder="Search countries"
                // countries={["CY"]}
                className='w-[49%] text-xs p-4 m-2 bg-white rounded-lg'
              />
              {/* <input type="text" name="country" id="country" className='m-2 p-4 rounded-lg w-[49%] border-2' placeholder='Add Country'/> */}
              <input type="text" name="PropertyValue" id="city" className='m-2 p-4 rounded-lg w-[49%] border-2' placeholder='Add City'/>
              <select name="propertytype" id="propertytype" className='w-[49%] m-2 p-4 rounded-lg'>
                <option  value="residential">Residential</option>
                <option  value="commercial">Commercial</option>
              </select>
              <input type="text" name="propertyvalue" id="propertyvalue" className='m-2 p-4 rounded-lg w-[49%] border-2' placeholder='Add Property Value'/>
              <input type="button" value="Submit" className='bg-white w-52 h-20 rounded-2xl m-2 p-4 cursor-pointer hover:bg-gray-500 hover:text-white text-xl font-semibold' />    
              
            </form>
                {/* <PropertyType/> */}
          </div>
        </div>
        
      </>
    )
}

export default Page