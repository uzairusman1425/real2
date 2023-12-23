"use client"
import { useState } from "react"

import UserContext from './Usercontext'

const UserContextProvider = ({ children }) => {

    const [refresh, setRefresh] = useState(true)
    const [updateTable, setUpdateTable] = useState(true)
    const [tableData, setTableData] = useState({
        id: '',
        ParentCity: "",
        cityName: "",
    })

    const [updateLat, setUpdateLat] = useState({
        lat: '',
        lng: ''
    })
    const [cityData, setCityData] = useState([])
    const [name, setName] = useState('')
    const [Avm, setAvm] = useState('')

    const providervalues = {
        refresh,
        setRefresh,
        updateTable,
        setUpdateTable,
        tableData,
        setTableData,
        updateLat,
        setUpdateLat,
        name,
        setName,
        Avm,
        setAvm,
        cityData,
        setCityData
    }
    return (
        <UserContext.Provider value={providervalues}>
            {children}
        </UserContext.Provider>
    )

}


export default UserContextProvider