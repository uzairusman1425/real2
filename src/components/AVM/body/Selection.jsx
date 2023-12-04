import React from 'react'

import ReactFlagsSelect from "react-flags-select";
import {  City }  from 'country-state-city';
import { useState } from 'react';
import PropertyType from '../../AVM/body/PropertyType/PropertyType';

function Selection() {
    const [selected, setSelected] = useState("");

  return (
    <div className='w-screen bg-white'>

        <div id="selection-section " className='container flex flex-col h-auto text-center justify-center'>
          <p className='my-3 text-xl font-semibold'>Automated Value Model AVM based on location and property type</p>
          <div id="selection" className='flex justify-evenly flex-wrap'>
            <ReactFlagsSelect 
              selected={selected}
              onSelect={(code) => setSelected(code)}
              placeholder="Select Country"
              searchable
              searchPlaceholder="Search countries"
              countries={["CY"]}
              className='w-72 text-xs '
            />
            <select name="" id="cities" className='w-[20rem] border-gray-300 border-[1px] rounded-md h-9'>
            <option value="-" defaultValue={null} className='text-white'>Cities</option>
              {City?.getCitiesOfCountry("CY")?.map((item,index)=>{
                return <option value={item.name} key={index}>{item.name}</option>
                  
              })}
            </select>
            <PropertyType/>

            <button type='button' className='bg-green-500 h-9 text-white w-56' >Search</button>
          </div>
        </div>
    </div>
  )
}

export default Selection