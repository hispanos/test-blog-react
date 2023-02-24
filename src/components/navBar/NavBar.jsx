import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../home/Home';

const NavBar = () => {

    const { user, handleLogout, doClick, } = useContext(AppContext);

    return (
        <nav className={`navbar ${doClick ? 'bg-primary' : 'bg-secondary'} navbar-expand-lg bg-body-tertiary`} data-bs-theme="dark">
            <div className="container-fluid">
                <NavLink to='/' className='navbar-brand text-white'>Inicio</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='admin' className='nav-link text-white'>Admin</NavLink>
                        </li>
                        <li className="nav-item">
                            <span className='nav-link text-white' onClick={handleLogout}>{user ? 'Cerrar Sesión' : 'Ingresar'}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar