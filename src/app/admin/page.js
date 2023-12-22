"use client"
import { useRouter } from 'next/navigation'
import React, { useState, useContext } from 'react'
import toast, { Toaster } from 'react-hot-toast';


const Page = () => {

    const router = useRouter();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const checkLogin = async () => {
        const response = await fetch('../api/admin/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        })
        const reply = await response.json()

        if (response.ok) {
            localStorage.setItem("session", "session")
            setTimeout(() => {
                router.push('/admin/addcity')
            }, 1000);
            // alert(`${reply.message}`)
            toast.success(`${reply.message}`)
        } else {
            toast.error(`${reply.error}`)
            // alert(`${reply.error}`)
        }
    }

    const Check = (event) => {
        event.preventDefault();
        checkLogin();
    }
    return (
        <div className='flex flex-row justify-center items-center'>
            <Toaster />
            <form className='flex flex-col justify-center items-center mt-40' onSubmit={Check}>
                <input
                    className='mb-5 px-4 py-2 text-lg text-gray-700 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                    type='text'
                    required
                    placeholder='Username'
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}
                    value={username}
                />
                <input
                    className='mb-5 px-4 py-2 text-lg text-gray-700 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
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
export default Page