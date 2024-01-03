import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import ReactCountryFlag from 'react-country-flag';
import ReactFlagsSelect from 'react-flags-select';
import UserContext from '../../context/UserContext'
const CountryTable = () => {
    const [countrylist, setCountrylist] = useState([]);
    const [name, setName] = useState('');

    const { refresh, setRefresh } = useContext(UserContext)
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('/api/admin/country');
                const data = response.data.data;
                const countries = data.map((item) => item.country);
                setCountrylist(countries);
            } catch (error) {
                console.log(error.message);
            }
        };

        getData();
    }, [refresh]); // Include refreshTable in the dependency array


    useEffect(() => {
        const handleDelete = async () => {
            if (name != '') {

                try {
                    await axios.delete(`/api/admin/country?country=${name}`);

                    setRefresh((prev) => !prev); // Toggle the refreshTable state
                } catch (error) {
                    console.log(error.message);
                }
            }
        };

        handleDelete()
    }, [name])


    return (
        <>
            <div className='text-white font-bold text-lg ml-20 mb-10'>DLETE COUNTIRES</div>
            <table className="table-auto text-white ml-12">
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {countrylist.map((item, index) => (
                        <tr key={index}>
                            <td className="flex flex-col mr-10">
                                <div className="flex flex-col ml-10">
                                    <ReactCountryFlag
                                        className="emojiFlag"
                                        countryCode={item}
                                        style={{ fontSize: '2em', lineHeight: '2em' }}
                                        aria-label="United States"
                                    />
                                </div>
                            </td>
                            <td className="ml-5">
                                <button
                                    onClick={() => {
                                        setName(item);

                                    }}
                                    className="bg-red-500 w-[100px] h-[40px] rounded-lg text-white"
                                >
                                    DELETE
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default CountryTable;
