import React from 'react'

function page() {
  return (
    <div className=''>
        <div>
            <h1 className='text-center text-4xl font-bold text-white my-10'>Add a City</h1>
        </div>
        <form action="" className='flex flex-wrap container justify-center'>
            <input type="text" name="" id="" className='m-2 p-4 rounded-lg w-[40%]' placeholder='City'/>
            <input type="text" name="" id="" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Average price'/>
            <input type="text" name="" id="" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Trough current'/>
            <input type="text" name="" id="" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Peak current'/>
            <input type="text" name="" id="" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Last 12 months'/>
            <input type="text" name="" id="" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Last 3 months'/>
            <input type="text" name="" id="" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Last month'/>
            <input type="text" name="" id="" className='m-2 p-4 rounded-lg w-[40%]' placeholder='Year on year'/>
        </form>
    </div>
  )
}

export default page