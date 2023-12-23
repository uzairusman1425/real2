import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import ReactCountryFlag from 'react-country-flag';
import UserContext from '../../context/Usercontext'
const CityTable = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCity, setSelectedCity] = useState({ cityName: '', country: '' });

    const { refresh, setRefresh } = useContext(UserContext)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/admin/country');
                const data = response?.data?.data;
                setCountries(data);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchData();
    }, [refresh]);
    useEffect(() => {
        const handleDelete = async () => {

            await axios.delete(`/api/admin/country?country=${selectedCity.country}&city=${selectedCity.cityName}`).then((response) => {
                setRefresh((prev) => !prev);

            }).catch((error) => {
                console.log(error.message);
            })

        };
        handleDelete()
    }, [selectedCity])

    return (
        <div>
            <div className='text-white font-bold text-lg ml-20 mb-10'>DLETE CITIES</div>
            <table className="table-auto">
                <thead>
                    <tr className=' text-white'>
                        <th>Country</th>
                        <th>City</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody className='text-white'>
                    {countries.map((country) =>
                        country.cities.map((city) => (
                            <tr key={city._id}>
                                <td className="flex flex-col mr-10">
                                    <div className="flex flex-col ml-10">
                                        <ReactCountryFlag
                                            className="emojiFlag"
                                            countryCode={country.country}
                                            style={{ fontSize: '2em', lineHeight: '2em' }}
                                            aria-label="United States"
                                        />
                                    </div>
                                </td>
                                <td className=' mr-5 pr-5'>{city.name}</td>
                                <td>
                                    <button
                                        onClick={() => { setSelectedCity({ cityName: city.name, country: country.country }) }}
                                        className="bg-red-500 w-[100px] h-[40px] rounded-lg text-white"
                                    >
                                        DELETE
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>



        </div>
    );
};

export default CityTable;
