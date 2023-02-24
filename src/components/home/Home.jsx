import React, { createContext, useEffect, useState } from 'react'
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom'
import { doLogout, getUser } from '../../services/login';
import Footer from '../footer/Footer';
import NavBar from '../navBar/NavBar';

export const AppContext = createContext({});

const Home = () => {

    const [user, setUser] = useState(false);
    const navigate = useNavigate('/')
    const [doClick, setDoClick] = useState(false);

    const handleLogout = () => {
        if (user) {
            doLogout();
            navigate('/')
        } else {
            navigate('/login');
        }
    }

    // const [searchParams, setSearchParams] = useSearchParams();

    // const idUser = searchParams.get('idUser');

    // useEffect(() => {
    //   setSearchParams({
    //     idUser: 50
    //   })
    // }, [])

    // console.log(idUser)

    useEffect(() => {
        const userData = getUser();
        if (userData) {
            setUser(userData)
        }
    }, []);


    return (
        <AppContext.Provider value={
            {
                user,
                handleLogout,
                doClick,
                setDoClick
            }
        }>
            <NavBar />
            <Outlet context={[user, handleLogout]} />
            <Footer/>
        </AppContext.Provider>
    )
}

export default Home