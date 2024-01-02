import React from 'react'

function Mapskeys() {
  return (
    <div className='flex justify-end mt-5 w-[95%]'>
        <div className='flex items-center justify-evenly'>
            <div className='w-3 h-3 mx-3 rounded-full bg-[#b0addf]'></div>
            <p>Very Low</p>
        </div>
        <div className='flex items-center justify-evenly'>
            <div className='w-3 h-3 mx-3 rounded-full bg-[#90eb6e]'></div>
            <p>Low</p>
        </div>
        <div className='flex items-center justify-evenly'>
            <div className='w-3 h-3 mx-3 rounded-full bg-[#f6f068]'></div>
            <p>Medium</p>
        </div>
        <div className='flex items-center justify-evenly'>
            <div className='w-3 h-3 mx-3 rounded-full bg-[#f9a76e]'></div>
            <p>High</p>
        </div>
        <div className='flex items-center justify-evenly'>
            <div className='w-3 h-3 mx-3 rounded-full bg-[#f37063]'></div>
            <p>Very High</p>
        </div>
    </div>
  )
}

export default Mapskeys