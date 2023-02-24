import React, { useReducer, useState } from 'react'
import { initialState, productReducer } from '../../reducers/productReducer';

const Products = () => {

    const [stateProduct, dispatch] = useReducer(productReducer, initialState);

    const [formData, setFormData] = useState({
        name: '',
        price: ''
    })

    const handleChange = ({target}) => {
        setFormData({
            ...formData,
            [target.name]: target.value
        })
    }

    const handleSave = (e) => {
        e.preventDefault()
        //Save API
        //Save UI
        dispatch({
            type: 'add',
            payload: {...formData}
        })
    }

    const handleDelete = (index) => {
        //Delete API
        //Delete UI
        dispatch({
            type: 'delete',
            payload: index
        })
    }

  return (
    <>
    <h1>Productos</h1>
    <form onSubmit={(e) => {handleSave(e)}}>
        <input type="text"  placeholder='Ingrese el nombre' name='name' value={formData.name} onChange={handleChange} />
        <input type="number"  placeholder='Ingrese el Precio' name='price' value={formData.price} onChange={handleChange} />
        <button type='submit'>Guardar</button>
    </form>
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {
                stateProduct.map((product, index) => (
                    <tr key={index}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td><span onClick={() => {handleDelete(index)}}>❌</span></td>
                    </tr>
                ))
            }
        </tbody>
    </table>
    </>
  )
}

export default Products