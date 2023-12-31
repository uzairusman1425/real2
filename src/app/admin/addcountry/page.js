'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/admin/PropertyType/Navbar'
import ReactFlagsSelect from "react-flags-select";
import { City } from 'country-state-city';
import MultipleSelectCheckmarks from '../../../components/AVM/body/MultipleSelectCheckmarks'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import CountryTable from '../../../components/admin/CountryTable'
import CityTable from '../../../components/admin/CityTable'
function Page() {
  const [selected, setSelected] = useState("");
  const [temparr, setTemparr] = useState([])
  const [cities, setCities] = useState()
  const [personName, setPersonName] = React.useState([]);

  const handlePostRequest = async () => {
    const cityObject = personName?.map(item => ({ name: item }))

    const postData = {
      country: selected,
      cities: cityObject
    };

    try {

      const response = await axios.post('../api/admin/country', postData);

      toast.success("Country and cities added")
      location.reload();
    } catch (error) {
      toast.error("Could not add")
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    setTemparr([])
    City?.getCitiesOfCountry(selected)?.map((item, index) => {
      setTemparr(current => {
        return ([...current, item.name])
      })
    })

  }, [selected])


  return (
    <>
      <Toaster />
      <Navbar page={'addcountry'} />

      <div className='w-screen  bg-[#38373c] flex justify-center mt-10'>

        <div className=''>
          <form action="" className='container flex justify-center '>
            <ReactFlagsSelect
              selected={selected}
              onSelect={(code) => setSelected(code)}
              placeholder="Select Country"
              searchable
              searchPlaceholder="Search countries"
              className='w-[49%] text-xs p-4 m-2 bg-white rounded-lg'
            />




            <MultipleSelectCheckmarks personName={personName} setPersonName={setPersonName} cityName={temparr} className={'w-[95%] h-full text-xs p-4 m-2 bg-white rounded-lg'} />


            <input type="button" value="Submit" onClick={handlePostRequest} className='bg-white w-52 h-20 rounded-2xl m-2 p-4 cursor-pointer hover:bg-gray-500 hover:text-white text-xl font-semibold' />

          </form>

        </div>
      </div>
      <div className="flex flex-row justify-center h-screen mt-10">
        <div className=" mr-32">
          <CountryTable />
        </div>
        <div className=" ">
          <CityTable />
        </div>


      </div>

    </>
  )
}

export default Page