import React from 'react'
import { Link } from 'react-router-dom'

const New = ({ title, description, image, id }) => {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={image} className="card-img-top" alt="Imagen" />
                <div className="card-body">
                    <h5 className='card-title'>{title}</h5>
                    <p className="card-text">{description}</p>
                    <Link className='btn btn-primary' to={`noticia/${id}`}>Ver Noticia</Link>
                </div>
        </div>
    )
}

export default New