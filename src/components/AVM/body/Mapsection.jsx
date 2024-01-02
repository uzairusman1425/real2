import React from 'react'
import facebook from "../../../assets/icons8-facebook.svg"
import pinterest from "../../../assets/icons8-pinterest.svg"
import twitter from "../../../assets/icons8-twitter.svg"
import linkedin from "../../../assets/icons8-linkedin.svg"
import grid from "../../../assets/icons8-grid-64.png"
import Image from 'next/image'
import GoolgeMap from '../../GoolgeMap/MyComponent'
import Mapskeys from './Mapskeys'

function Mapsection() {
    return (
        <>
            <div className='w-screen bg-[#eeeeee]'>

                <div className='container sm:py-0 py-2 h-auto flex justify-center'>
                    <div id="tab-selection" className=' border-black w-screen h-auto flex flex-col sm:flex-row sm:items-end justify-center items-center sm:justify-between'>
                        <div className='border-t-8  border-[#555d66] sm:w-44 w-[90%] h-auto bg-white flex text-sm items-center font-semibold'>
                            <Image style={{filter: 'invert(55%)'}} src={grid} alt='grid' className='w-10' />
                            <p>City Overview Table</p>
                        </div>
                        <div className=' border-[#555d66] my-2 sm:w-48 w-[90%] h-auto border-t-0 sm:border-t-2 flex items-center justify-start sm:justify-evenly'>
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
                <div id="map-stats-form-bg" className='container h-auto mt-2 flex flex-col justify-center'>
                    <div id='map-stats-form-section' className=' container w-[90%] sm:w-[100%] border-black'>
                        <GoolgeMap />
                    </div>
                    <Mapskeys/>
                </div>
            </div>

        </>

    )
}


export default Mapsection