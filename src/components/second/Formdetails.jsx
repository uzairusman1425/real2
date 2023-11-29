import Image from 'next/image'
import React from 'react'
import RocketIcon from '@mui/icons-material/Rocket';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import { SvgIcon } from '@mui/material';
import { blueGrey } from '@mui/material/colors';


function Formdetails() {
    return (
        <div className='bg-white flex'>
            <div id='Card' className='container h-auto border-2 flex flex-col mt-24 mb-10 shadow-lg '>
                <div id='header' className='flex items-center justify-center my-5'>
                    <p className='tracking-[-0.4em] text-gray-300'>===================================================</p>
                    <SvgIcon className='ml-5' sx={{ fontSize: 50, color: '#70757c' }} component={RocketIcon} />
                    <p className='mx-5 font-medium text-lg'>Get Started</p>
                    <p className='tracking-[-0.4em] text-gray-300'>===================================================</p>
                </div>
                <div id='sections' className='flex my-10'>
                    <div id='left' className='flex flex-col items-center justify-center h-full w-[50%] text-center border-r-2'>
                        <SvgIcon component={PermPhoneMsgIcon} sx={{ fontSize: 50 }} className='my-2' />
                        <p className='my-2 font-light'>TO SPEAK TO OUR SALES TEAM</p>
                        <p className='my-2 font-semibold'>(00357) 25 507 555</p>
                    </div>

                    <div id="right" className='w-[50%]'>
                        <form action="" className='flex flex-wrap mx-10 justify-between'>
                            <input type="text" placeholder='First Name' className=' border-2 w-[46.7%] py-2 px-2 rounded-md mx-2 my-2' />
                            <input type="text" placeholder='Last Name' className=' border-2 w-[46.7%] py-2 px-2 rounded-md mx-2 my-2' />
                            <input type="text" placeholder='Email' className=' border-2 w-[46.7%] py-2 px-2 rounded-md mx-2 my-2' />
                            <input type="text" placeholder='Phone' className=' border-2 w-[46.7%] py-2 px-2 rounded-md mx-2 my-2' />
                            <input type="text" placeholder='Company' className=' border-2 w-[46.7%] py-2 px-2 rounded-md mx-2 my-2' />
                            <input type="text" placeholder='Title' className=' border-2 w-[46.7%] py-2 px-2 rounded-md mx-2 my-2' />
                            <select name="avmaccount" id="" className=' border-2 w-[100%] py-2 px-2 rounded-md mx-2 my-2 text-gray-400'>
                                <option value="1" selected>Interested for corporate AVM account</option>
                                <option value="2">Interested for online training of the system</option>
                                <option value="3">Report a problem</option>
                                <option value="4">Request a call back</option>
                            </select>
                            <div className='w-full flex justify-center'>
                                <input type="button" value="Request more info" className='bg-[#ed1d24] text-white px-8 py-4 rounded mx-auto my-2 self-center cursor-pointer' />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Formdetails