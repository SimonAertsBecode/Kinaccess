import React, {createContext, useState} from 'react'

export const UserContext = createContext();

export const UserProvider = () => {
    const [userInfos, setUserInfos] = useState({
        name : null
    })
}