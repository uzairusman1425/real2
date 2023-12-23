import { Hidden } from '@mui/material';
import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../../context/UserContext';
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios';
const YourComponent = () => {
    const { updateTable, setUpdateTable, tableData, setTableData } = useContext(UserContext)
    const [formData, setFormData] = useState({
        id: tableData.id,
        ParentCity: tableData.ParentCity,
        cityName: tableData.cityName,
        averagePrice: 0,
        troughCurrent: 0,
        peakCurrent: 0,
        last12Month: 0,
        last3Month: 0,
        lastMonth: 0,
        yearOnYear: new Array(12).fill(0), // Array of 12 zeros
    });
    useEffect(() => {
        setFormData({
            id: tableData.id,
            ParentCity: tableData.ParentCity,
            cityName: '',
            averagePrice: 0,
            troughCurrent: 0,
            peakCurrent: 0,
            last12Month: 0,
            last3Month: 0,
            lastMonth: 0,
            yearOnYear: new Array(12).fill(0),
        });
    }, [tableData.id, tableData.ParentCity]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: name === 'yearOnYear' ? value.split(',').map(Number) : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        patchData(formData);
        setUpdateTable(!updateTable)
    };


    const patchData = async (data) => {
        try {
            const url = '/api/admin/table'; // Replace with your actual API endpoint
            const response = await axios.patch(url, data, {
                headers: {
                    'Content-Type': 'application/json',
                    // Add any additional headers if needed
                },
            });


            const result = response.data;
            toast.success("updated successfully")
            window.location.reload()
            console.log('Data updated successfully:', result);
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };
    useEffect(() => {

    }, [tableData.ParentCity]);


    return (

        <div className={`${updateTable ? 'hidden' : 'flex'
            } flex-col justify-center items-center h-screen bg-gray-100 absolute right-[30%] top-[35%] z-50 w-[40%]`}>

            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="hidden" name="id" value={formData.id} onChange={handleChange} />
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="ParentCity">
                        Parent City:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" name="ParentCity" value={formData.ParentCity} onChange={handleChange} required />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="cityName">
                        City Name:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" name="cityName" value={formData.cityName} onChange={handleChange} required />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="averagePrice">
                        Average Price:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number" name="averagePrice" value={formData.averagePrice} onChange={handleChange} required />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="troughCurrent">
                        Trough Current:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number" name="troughCurrent" value={formData.troughCurrent} onChange={handleChange} required />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="peakCurrent">
                        Peak Current:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number" name="peakCurrent" value={formData.peakCurrent} onChange={handleChange} required />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="last12Month">
                        Last 12 Months:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number" name="last12Month" value={formData.last12Month} onChange={handleChange} required />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="last3Month">
                        Last 3 Months:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number" name="last3Month" value={formData.last3Month} onChange={handleChange} required />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="lastMonth">
                        Last Month:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number" name="lastMonth" value={formData.lastMonth} onChange={handleChange} required />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="yearOnYear">
                        Year on Year (comma-separated values):
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" name="yearOnYear" value={formData.yearOnYear.join(',')} onChange={handleChange} required />
                </div>

                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div >



    );
};

export default YourComponent;
