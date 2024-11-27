import React from 'react'
import { Link } from 'react-router-dom'

const ShowProducts = ({product}) => {
    return (
        <div className='col-12 col-md-6 col-lg-4 col-xl-3' key={product.id}>
            <div className="card">
                <img src={product.image} className="card-img-top p-3 shadow-sm" alt={product.title} height="300px" />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <div className='action_buttons'>
                        <Link className="btn btn-outline-dark text-center" to={`/product/${product.id}`}>Buy Now</Link>
                        <button className="btn btn-outline-dark text-center ms-3">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ShowProducts