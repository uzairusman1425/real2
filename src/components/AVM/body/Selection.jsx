'use client'
import React from 'react'

import ReactFlagsSelect from "react-flags-select";
import { City } from 'country-state-city';
import { useState, useEffect, useContext } from 'react';
import PropertyType from '../../AVM/body/PropertyType/PropertyType';
import axios from 'axios'
import UserContext from '../../../context/UserContext';


function Selection() {
  const [selected, setSelected] = useState("");
  const [countrylist, setCountrylist] = useState(["CY"])
  const [cityWithCountry, setCityWithCountry] = useState([])
  const [cities, setCities] = useState([])
  const tempCountryArray = [];
  let newCountryArray = [];
  const { Avm, setAvm } = useContext(UserContext)
  const pushIntoArray = (item) => {

    const newCountryArray = [...countrylist, item];
    setCountrylist(newCountryArray);

  };

  function removeDuplicates(arr) {
    let unique = arr.reduce((acc, curr) => {
      if (!acc.includes(curr))
        acc.push(curr);
      return acc;
    }, []);
    return unique;
  }

  useEffect(() => {
    const getResponse = async () => {

      await axios.get(`/api/admin/country`).then(function (response) {
        response.data.data.map((item) => {
          setCityWithCountry(current => [...current, { country: item.country, cities: item.cities }])
          if (item.country) {

            tempCountryArray.push(item.country)
          }
        })
        newCountryArray = [...countrylist, ...tempCountryArray]
        setCountrylist(newCountryArray)
      }).catch(err => {console.log(err);})

    }
    getResponse();
  }, [])

  useEffect(() => {
    setCities([])
    cityWithCountry.filter((item) => (item.country === selected)).map((item) => {
      item.cities.map((item) => {
        setCities(current => [...current, item.name])
      })
    })
  }, [selected])


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
            className='lg:w-96 md:w-56 sm:w-72 w-[90%] text-xs h-[45px] '
            margin={null}
            padding={null}
            style={
              {
                margin:'0px',
                padding: "0px"

              }
            }
          />

          <select
            onChange={(e) => {
              setAvm(e.target.value)
            }}
            id="countries"
            className="lg:w-96 md:w-72 sm:w-72 w-[90%] h-[37.5px] bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  "
          >
            <option defaultValue={null}>Choose a city</option>
            {
              removeDuplicates(cities).map((item, index) => {

                return <option value={item} key={index}>{item}</option>
              })
            }
          </select>

          <button type='button' className='bg-green-500 h-9 mb-2 sm:mb-2 mt-2 sm:mt-0 text-white w-[90%] sm:w-56' >Search</button>
        </div>
      </div>
    </div>
  )
}

export default Selection