import React from 'react'
import Navbar from '../../components/admin/PropertyType/Navbar'

function page() {
  return (
    <div className=''>
    <Navbar page={'addcity'} />
        <div>
            <h1 className='text-center text-4xl font-bold text-white my-10'>Add a City</h1>
        </div>
        <form action="" className='flex flex-wrap container justify-center'>
            <input type="text" name="city" id="city" className='m-2 p-4 rounded-lg w-[40%]' placeholder='City'/>
            <input type="text" name="avgprice" id="avgprice" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Average price'/>
            <input type="text" name="trcurrent" id="trcurrent" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Trough current'/>
            <input type="text" name="peakcurrrent" id="peakcurrrent" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Peak current'/>
            <input type="text" name="last12" id="last12" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Last 12 months'/>
            <input type="text" name="last3" id="last3" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Last 3 months'/>
            <input type="text" name="last" id="last" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Last month'/>
            <input type="text" name="yearonyear" id="yearonyear" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Year on year'/>
            <input type="button" value="Submit" className='bg-white w-52 h-20 rounded-2xl m-2 p-4 cursor-pointer hover:bg-gray-500 hover:text-white text-xl font-semibold' />
        </form>
    </div>
  )
}

export default page