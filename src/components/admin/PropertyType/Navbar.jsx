import Link from 'next/link'
import React from 'react'


function index({page}) {
  return (
    <div className='w-screen bg-gray-300'>
      <div id="navbar" className='container flex items-center w-screen h-12 '>
            <Link href="/addcountry" className= {page==='addcountry'?"mx-2  text-red-700 font-semibold border-b-8  px-3 py-3 pb-1 border-b-red-700":"mx-2 text-red-0 font-semibold border-b-8  px-3 py-3 pb-1  border-b-gray-300 "} >Add Country</Link>
            <Link href="/addcity" className= {page==='addcity'? "mx-2 text-red-700 font-semibold border-b-8 px-3 py-3 pb-1  border-b-red-700": "mx-2 text-red-0 font-semibold border-b-8 px-3 py-3 pb-1  border-b-gray-300"}>Add City</Link>
      </div>

    </div>
  )
}

export default index