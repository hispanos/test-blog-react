import React, { useEffect, useState } from 'react'
import { deleteNew, getNews } from '../../services/news'
import './style.scss'

const Admin = () => {

    const [data, setData] = useState([]);
    const [reload, setReload] = useState(false);

    const getData = async () => {
        const response = await getNews();
        setData(response);
    }

    useEffect(() => {
        getData();
    }, [reload])

    const handleDelete = async (idNew) => {
        const response = await deleteNew(idNew);
        if (response) {
            setReload(!reload);
        }else {
            alert('Hubo un error al eliminar');
        }
    }

    const handleEdit = (idNew) => {
        console.log(idNew)
    }

    return (
        <div className='container-fluid'>
            <div className='table-responsive'>
                <table className='table table-striped table-hover'>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Título</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.date}</td>
                                    <td>{row.title}</td>
                                    <td>
                                        <span className="material-symbols-outlined table__action table__action--edit" onClick={() => {
                                            handleEdit(row.id)
                                        }}>
                                            edit
                                        </span>
                                        <span className="material-symbols-outlined table__action table__action--delete" onClick={() => {handleDelete(row.id)}}>
                                            delete_forever
                                        </span>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Admin