"use client"
import React, { useState } from 'react'
import Headerfooter from '@/components/headerfooter/HeaderFooter'
const page = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const check = (event) => {
        event.preventDefault();
        if (username === "username" && password === "123456") {
            localStorage.setItem("session", "session")
            
        } else {
            alert("user not exist")
        }
    }
    return (
        <div className='flex flex-row justify-center items-center'>
            <form className='flex flex-col justify-center items-center mt-40' onSubmit={check}>
                <input
                    class='mb-5 px-4 py-2 text-lg text-gray-700 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                    type='text'
                    required
                    placeholder='Username'
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}
                    value={username}
                />
                <input
                    class='mb-5 px-4 py-2 text-lg text-gray-700 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                    type='password'
                    required
                    placeholder='password'
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    value={password}
                />
                <button className=' bg-red-400 w-40 h-10 rounded-lg hover:bg-red-600 text-white shadow-orange-950' type='submit'>login</button>
            </form>
        </div>
    )
}
export default page