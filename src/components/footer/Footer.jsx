import React, { useContext } from 'react'
import { AppContext } from '../home/Home'

const Footer = () => {

    const { user, doClick, setDoClick } = useContext(AppContext);

  return (
    <>
    <span>Bienvenido: {user?.name}</span>
    <button onClick={() => {
        setDoClick(!doClick);
    }}>Hazme Click</button>
    </>
  )
}

export default Footer