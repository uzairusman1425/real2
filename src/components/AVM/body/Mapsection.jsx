import React from 'react'
import facebook from "@/assets/icons8-facebook.svg"
import pinterest from "@/assets/icons8-pinterest.svg"
import twitter from "@/assets/icons8-twitter.svg"
import linkedin from "@/assets/icons8-linkedin.svg"
import grid from "@/assets/icons8-grid-64.png"
import Image from 'next/image'
import GoolgeMap from '@/components/GoolgeMap/MyComponent'



function Mapsection() {
    return (
        <>
            <div className='w-screen bg-gray-100'>

                <div className='container h-20 flex justify-center'>
                    <div id="tab-selection" className=' border-black w-screen h-auto flex items-end justify-between'>
                        <div className='border-t-8 border-red-500 w-44 h-14 bg-white flex text-sm items-center font-semibold'>
                            <Image src={grid} alt='grid' className='w-10' />
                            <p>City Overview Table</p>
                        </div>
                        <div className=' border-gray-300 w-48 h-14 border-t-2 flex items-center justify-evenly'>
                            <p className='text-gray-400'>Share: </p>
                            <a href=""><Image src={facebook} alt='facebook' className='w-7' /></a>
                            <a href=""><Image src={twitter} alt='twitter' className='w-7' /></a>
                            <a href=""><Image src={linkedin} alt='linkedin' className='w-7' /></a>
                            <a href=""><Image src={pinterest} alt='pinterest' className='w-7' /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-screen  bg-white overflow-hidden'>
                <div id="map-stats-form-bg" className='container h-96 flex justify-center'>
                    <div id='map-stats-form-section' className='border-2 border-black w-screen'>
                        <GoolgeMap />
                    </div>
                </div>
            </div>

        </>

    )
}


export default Mapsection