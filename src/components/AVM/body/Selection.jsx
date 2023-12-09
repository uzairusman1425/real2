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
    const [cityWithCountry,setCityWithCountry] = useState([]) 
    const [cities,setCities] = useState([])
    const tempCountryArray = [];
    let newCountryArray = [];
    const pushIntoArray = (item) => {
      // console.log(item);
      
        const newCountryArray = [...countrylist, item];
        // console.log(newCountryArray);
        setCountrylist(newCountryArray);
      
    };

    function removeDuplicates(arr) {  
    let unique = arr.reduce((acc, curr)=> {
          if (!acc.includes(curr))
              acc.push(curr);
          return acc;
      }, []);
      return unique;
  }

    useEffect(() => {
      const getResponse = async () =>{

        const response = await axios.get(`api/admin/country`).then(function (response){
          // console.log(response.data.data)
          response.data.data.map((item)=>{
            // console.log(item)
            // cityWithCountry.push({country:item.country,cities:item.cities})
            setCityWithCountry(current => [...current, {country:item.country,cities:item.cities}])
            if(item.country){
              
              tempCountryArray.push(item.country)
            }
          })
          // console.log(tempCountryArray);
          newCountryArray=[...countrylist,...tempCountryArray]
          setCountrylist(newCountryArray)
        })
        
        // console.log(cityWithCountry);
      }
      getResponse();
    }, [])

    useEffect(()=>{
      // console.log(cityWithCountry);
      setCities([])
      cityWithCountry.filter((item) => (item.country===selected)).map((item)=>{
        item.cities.map((item)=>{
          // console.log(item.name);
          setCities(current => [...current, item.name])
          // console.log(removeDuplicates());
        })
      })
      // console.log();
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
                removeDuplicates(cities).map((item,index) => {
                  return <option value={item} key={index}>{item}</option>
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