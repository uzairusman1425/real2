'use client'
import React from 'react'

import ReactFlagsSelect from "react-flags-select";
import {  City }  from 'country-state-city';
import { useState,useEffect } from 'react';
import PropertyType from '../../AVM/body/PropertyType/PropertyType';
import axios from 'axios'


function Selection() {
    const [selected, setSelected] = useState("");
    const [countrylist,setCountrylist] = useState(["CY","AB","DZ","CY"])
    const cityWithCountry = []
    const tempCountryArray = [];
    let newCountryArray = [];
    const pushIntoArray = (item) => {
      // console.log(item);
      
        const newCountryArray = [...countrylist, item];
        // console.log(newCountryArray);
        setCountrylist(newCountryArray);
      
    };

    useEffect(() => {
      const getResponse = async () =>{

        const response = await axios.get(`http://localhost:3000/api/admin/country`).then(function (response){
          // console.log(response.data.data)
          response.data.data.map((item)=>{
            // console.log(item)
            cityWithCountry.push({country:item.country,cities:item.cities})
            if(item.country){
              
              tempCountryArray.push(item.country)
            }
          })
          // console.log(tempCountryArray);
          newCountryArray=[...countrylist,...tempCountryArray]
          setCountrylist(newCountryArray)
        })
        
        console.log(cityWithCountry);
      }
      getResponse();
    }, [])

    useEffect(()=>{
      console.log(cityWithCountry);
      cityWithCountry.map((item)=>{
        // console.log(item)
      })
    },[selected])
    

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
              countries={countrylist}
              className='w-72 text-xs '
              
            />
            <select name="" id="cities" className='w-[20rem] border-gray-300 border-[1px] rounded-md h-9'>
            <option value="-" defaultValue={null} className='text-white'>Cities</option>
              {
                cityWithCountry.filter((item) => (item.country===selected)).map((item,index)=>{
                  {/* console.log(item.cities) */}
                })
              }
              
              {/* {City?.getCitiesOfCountry(selected)?.map((item,index)=>{
                return <option value={item.name} key={index}>{item.name}</option>
                  
              })} */}
            </select>
            <PropertyType/>

            <button type='button' className='bg-green-500 h-9 text-white w-56' >Search</button>
          </div>
        </div>
    </div>
  )
}

export default Selection