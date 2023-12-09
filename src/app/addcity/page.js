'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/admin/PropertyType/Navbar'
import axios from 'axios'

function Page() {
  const [city,setCity]=useState()
  const [averagePrice,setaveragePrice]=useState()
  const [troughcurrent,setTroughcurrent]=useState()
  const [peakCurrent,setPeakCurrent]=useState()
  const [last12,setLast12]=useState()
  const [last3,setLast3]=useState()
  const [lastm,setLastM]=useState()
  const [yearOnYear,setYearOnYear]=useState([])
  const [deleteRow,setDeleteRow] = useState('')
  
  const handlePostRequest = async () => {
    const postData = {
      cityName: city,
      averagePrice: averagePrice,
      troughCurrent: troughcurrent,
      peakCurrent: peakCurrent,
      last12Month: last12,
      last3Month: last3,
      lastMonth: lastm,
      yearOnYear: yearOnYear
    };
    // console.log(postData);
    try {
      const response = await axios.post('http://localhost:3000/api/admin/table', postData);
      
      setCity('')
      setaveragePrice('')
      setTroughcurrent('')
      setPeakCurrent('')
      setLast12('')
      setLast3('')
      setLastM('')
      yearOnYear.map((_,index)=>{
        // console.log(`what was deleted? ${_} on index ${index}`);
        setIndexYearOnYear('',index)})
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
    }
  };

  const handleDeleteRequest = async () => {
    
    const postData = {
      "cityName": "Karachi"
    };
    try {
      console.log(postData);
      const response = await axios.delete('api/admin/table', postData);
      
      setDeleteRow('')
      console.log(response);
    } catch (error) {
      // Handle errors
      console.error('Error:', error.message);
    }
  };
  

  const setIndexYearOnYear = (item,index) =>{
    let arr=yearOnYear;
    arr[index]=item
    setYearOnYear(arr);
  }
  return (
    <div className=''>
    <Navbar page={'addcity'} />
        <div>
            <h1 className='text-center text-4xl font-bold text-white my-10'>Add a City</h1>
        </div>
        <form action="" className='flex flex-wrap container justify-center'>
            <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} name="city" id="city" className='m-2 p-4 rounded-lg w-[40%]' placeholder='City'/>
            <input type="text" value={averagePrice} onChange={(e)=>{setaveragePrice(e.target.value)}} name="avgprice" id="avgprice" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Average price'/>
            <input type="text" value={troughcurrent} onChange={(e)=>{setTroughcurrent(e.target.value)}} name="trcurrent" id="trcurrent" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Trough current'/>
            <input type="text" value={peakCurrent} onChange={(e)=>{setPeakCurrent(e.target.value)}} name="peakcurrrent" id="peakcurrrent" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Peak current'/>
            <input type="text" value={last12} onChange={(e)=>{setLast12(e.target.value)}} name="last12" id="last12" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Last 12 months'/>
            <input type="text" value={last3} onChange={(e)=>{setLast3(e.target.value)}} name="last3" id="last3" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Last 3 months'/>
            <input type="text" value={lastm} onChange={(e)=>{setLastM(e.target.value)}} name="last" id="last" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Last month'/>
            <br />
            <h1 className='w-full text-white text-center text-3xl m-10 font-semibold'>Enter year on year records</h1>
            <input type="text" value={yearOnYear[0]} onChange={(e)=>{setIndexYearOnYear(e.target.value,0)}} name="yearonyear1" id="yearonyear1" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Month 1'/>
            <input type="text" value={yearOnYear[1]} onChange={(e)=>{setIndexYearOnYear(e.target.value,1)}} name="yearonyear2" id="yearonyear2" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Month 2'/>
            <input type="text" value={yearOnYear[2]} onChange={(e)=>{setIndexYearOnYear(e.target.value,2)}} name="yearonyear3" id="yearonyear3" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Month 3'/>
            <input type="text" value={yearOnYear[3]} onChange={(e)=>{setIndexYearOnYear(e.target.value,3)}} name="yearonyear4" id="yearonyear4" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Month 4'/>
            <input type="text" value={yearOnYear[4]} onChange={(e)=>{setIndexYearOnYear(e.target.value,4)}} name="yearonyear5" id="yearonyear5" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Month 5'/>
            <input type="text" value={yearOnYear[5]} onChange={(e)=>{setIndexYearOnYear(e.target.value,5)}} name="yearonyear6" id="yearonyear6" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Month 6'/>
            <input type="text" value={yearOnYear[6]} onChange={(e)=>{setIndexYearOnYear(e.target.value,6)}} name="yearonyear7" id="yearonyear7" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Month 7'/>
            <input type="text" value={yearOnYear[7]} onChange={(e)=>{setIndexYearOnYear(e.target.value,7)}} name="yearonyear8" id="yearonyear8" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Month 8'/>
            <input type="text" value={yearOnYear[8]} onChange={(e)=>{setIndexYearOnYear(e.target.value,8)}} name="yearonyear9" id="yearonyear9" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Month 9'/>
            <input type="text" value={yearOnYear[9]} onChange={(e)=>{setIndexYearOnYear(e.target.value,9)}} name="yearonyear10" id="yearonyear10" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Month 10'/>
            <input type="text" value={yearOnYear[10]} onChange={(e)=>{setIndexYearOnYear(e.target.value,10)}} name="yearonyear11" id="yearonyear11" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Month 11'/>
            <input type="text" value={yearOnYear[11]} onChange={(e)=>{setIndexYearOnYear(e.target.value,11)}} name="yearonyear12" id="yearonyear12" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Month 12'/>
            <input type="button" value="Submit" onClick={handlePostRequest} className='bg-white w-52 h-20 rounded-2xl m-2 p-4 cursor-pointer hover:bg-gray-500 hover:text-white text-xl font-semibold' />
        </form>

        <h1 className='w-full text-white text-center text-3xl m-10 font-semibold'>Delete a row</h1>
        <form action="" className='flex justify-center items-center'>

          <input type="text" value={deleteRow} onChange={(e)=>{setDeleteRow(e.target.value);}} name="deleterow" id="deleterow" className='m-2 p-4 self-center rounded-lg w-[55%]' placeholder='Enter City Name to delete'/>
          <input type="button" value="Submit" onClick={handleDeleteRequest} className='bg-white w-52 h-20 rounded-2xl m-2 p-4 cursor-pointer hover:bg-gray-500 hover:text-white text-xl font-semibold' />
        </form>
        
    </div>
  )
}


export default Page