import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactCountryFlag from "react-country-flag"
import ReactFlagsSelect from "react-flags-select";
const CityTable = () => {

    const [countrylist, setCountrylist] = useState([])
    const [name, setName] = useState()

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('/api/admin/country');
                const data = response.data.data;


                const countries = data.map(item => item.country);
                setCountrylist(countries);
            } catch (error) {
                console.log(error.message);
            }
        };

        getData();
    }, []);

    const handledelete = async () => {

        await axios.delete(`/api/admin/country/${name}`).then((response) => {

        }).catch((error) => {
            console.log(error.message);
        })

    }

    return (
        <>

            <table className="table-auto">
                <thead>
                    <tr>
                        <th>Song</th>
                        <th>Artist</th>

                    </tr>
                </thead>
                <tbody>


                    {
                        countrylist.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td className='flex flex-col mr-10'>
                                        <div className='flex flex-col ml-10'>
                                            <ReactCountryFlag

                                                className="emojiFlag"
                                                countryCode={item}
                                                style={{
                                                    fontSize: '2em',
                                                    lineHeight: '2em',
                                                }}
                                                aria-label="United States"
                                            />
                                        </div>
                                    </td>
                                    <td className=' ml-5'>
                                        <button onClick={() => {
                                            setName(item),
                                                handledelete()
                                        }} className='bg-red-500 w-[100px] h-[40px] rounded-lg text-white'>DELETE</button>
                                    </td>
                                </tr>
                            )
                        })
                    }



                </tbody>
            </table>

        </>
    )
}

export default CityTable