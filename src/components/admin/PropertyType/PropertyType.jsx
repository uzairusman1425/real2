"use client"

import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { SvgIcon } from '@mui/material';
import Modalproperty from '../../admin/PropertyType/Modalproperty';

function PropertyType() {

    const [divClicked,setDivClicked] = useState(false)
  const [fieldText,SetFieldText] = useState('Property Type')
  const handleclick = () => {
    setDivClicked(!divClicked);


  }
  return (
    <>

      
      <div className='w-[50rem] h-9 bg-white flex items-center justify-between hover:cursor-pointer border-2 rounded-md ' style={{border: `2px solid ${divClicked ? 'red' : 'black'}`}} onClick={handleclick}>
        <p className='text-black ml-2'>{fieldText}</p>
        <SvgIcon component={ArrowDropDownIcon} />
      </div>
      {divClicked && <Modalproperty setDivClicked={setDivClicked} SetFieldText={SetFieldText}/>}
    </>
  )
}

export default PropertyType