import React, { useReducer } from 'react'
import { countReducer, initialState } from '../../reducers/countReducer'

const Counter = () => {

    const [state, dispatch] = useReducer(countReducer, initialState)

    const handlePlus = () => {
        dispatch({
            type: 'increment'
        })
    }

    const handleMinus = () => {
        dispatch({
            type: 'decrement'
        })
    }

  return (
    <>
    <h2>Contador</h2>
    <button onClick={handleMinus}>-</button>
    <span>{state.count}</span>
    <button onClick={handlePlus}>+</button>
    </>
  )
}

export default Counter