import React from 'react'
import { countries } from 'countries-list'
import { getCountryCode, getCountryData, getCountryDataList, getEmojiFlag } from 'countries-list'
import ReactFlagsSelect from "react-flags-select";
import { Country, State, City }  from 'country-state-city';
import { useState } from 'react';

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
            <select name="" id="cities" className='w-[20rem] border-2 rounded-md h-9'>
            <option value="-" defaultValue={null} className='text-white'>Cities</option>
              {City?.getCitiesOfCountry("CY")?.map((item,index)=>{
                return <option value={item.name} key={index}>{item.name}</option>
                  
              })}
            </select>
            <select name="" id="property_type" className='w-72 border-2 rounded-md h-9'>
            <option value="-" defaultValue={null}>
            
            </option>
              
            </select>

            <button type='button' className='bg-green-500 h-9 text-white w-56' >Search</button>
          </div>
        </div>
    </div>
  )
}

export default Selection