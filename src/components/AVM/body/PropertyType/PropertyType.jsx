"use client"

import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { SvgIcon } from '@mui/material';
import Modalproperty from '../../../AVM/body/PropertyType/Modalproperty';

function PropertyType() {

    const [divClicked,setDivClicked] = useState(false)
  const [fieldText,SetFieldText] = useState('Property Type')
  const handleclick = () => {
    setDivClicked(!divClicked);


  }
  return (
    <div>

      
      <div className=' w-64 h-9 bg-white flex justify-between hover:cursor-pointer border-gray-300 border-[1px] rounded-md items-center  ' style={{border:`1px solid ${divClicked ? 'red' : 'rgb(209,213,219)'}`}} onClick={handleclick}>
        <p className='text-black ml-2'>{fieldText}</p>
        <SvgIcon component={ArrowDropDownIcon} />
      </div>
      {divClicked && <Modalproperty setDivClicked={setDivClicked} SetFieldText={SetFieldText}/>}
      
    </div>
    
  )
}

export default PropertyType