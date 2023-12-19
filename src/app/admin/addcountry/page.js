'use client'
import React, { useEffect, useState } from 'react'
import PropertyType from '../../../components/admin/PropertyType/PropertyType';

import Navbar from '../../../components/admin/PropertyType/Navbar'
import ReactFlagsSelect from "react-flags-select";
import {  City }  from 'country-state-city';
import MultipleSelectCheckmarks from '../../../components/AVM/body/MultipleSelectCheckmarks'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function Page() {
  const [selected, setSelected] = useState("");
  const [temparr,setTemparr] = useState([])
  const [cities,setCities] = useState()
  const [personName, setPersonName] = React.useState([]);
  
  const handlePostRequest = async () => {
    const cityObject = personName?.map(item => ({name:item}))
   
    const postData = {
      country:selected,
      cities:cityObject
    };
    console.log(postData);
    try {

     const response  =  await axios.post('../api/admin/country', postData);

     toast.success("Country and cities added")
     location.reload();
  //  console.log("response" , response.data);
    } catch (error) {
      // Handle errors
      toast.error("Could not add")
      console.error('Error:', error);
    }
  };

  useEffect(()=>{
    setTemparr([])
    City?.getCitiesOfCountry(selected)?.map((item,index)=>{
      setTemparr(current => {
        return ([...current, item.name])
      })
    })
    
  },[selected])

  useEffect(()=>{
    // console.log(personName);
  },[personName])

  return (
      <>
        <Toaster/>
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
              
                
              

              <MultipleSelectCheckmarks personName={personName} setPersonName={setPersonName} cityName={temparr} className={'w-[95%] h-full text-xs p-4 m-2 bg-white rounded-lg'} />

              {/* <select name="propertytype" id="propertytype" className='w-[49%] m-2 p-4 rounded-lg'>
                <option  value="residential">Residential</option>
                <option  value="commercial">Commercial</option>
              </select>
              <input type="text" name="propertyvalue" id="propertyvalue" className='m-2 p-4 rounded-lg w-[49%] border-2' placeholder='Add Property Value'/> */}
              <input type="button" value="Submit" onClick={handlePostRequest} className='bg-white w-52 h-20 rounded-2xl m-2 p-4 cursor-pointer hover:bg-gray-500 hover:text-white text-xl font-semibold' />    
                
            </form>
                {/* <PropertyType/> */}
          </div>
        </div>
        
      </>
    )
}

export default Page