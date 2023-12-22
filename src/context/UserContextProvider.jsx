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

    const providervalues = {
        refresh,
        setRefresh,
        updateTable,
        setUpdateTable,
        tableData,
        setTableData
    }
    return (
        <UserContext.Provider value={providervalues}>
            {children}
        </UserContext.Provider>
    )

}


export default UserContextProvider