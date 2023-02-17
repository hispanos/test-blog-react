import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getUser } from '../services/login';

const RoutePrivate = ({ children }) => {

    const [user, setUser] = useState(false);
    const navigate = useNavigate('/')

    useEffect(() => {
        const userData = getUser();
        if (!userData) {
            navigate('/login')
        } else {
            setUser(userData)
        }
    }, []);


    return (
        <>
            {user ? children : <></>}
        </>
    )
}

export default RoutePrivate;