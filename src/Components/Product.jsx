import React, {useEffect, useState} from 'react'
import { productArray } from './AllProducts'
import {useNavigate} from 'react-router-dom'

const Product = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])

    const handleClick = (id) => {
        console.log("Received Id : ", id)
        navigate(`/products/${id}`)
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then((data) =>{
            console.log("FakeStore API Data : ", data )
            setProducts(data)
        })
    }, [])

    
    return (
        <div>
            <h1 className='text-center text-primary'>Product Page</h1>

            <div className='container-fluid'>
                <div className='row'>
                    {products.map((product) => (
                        <div className='col-12  col-md-4 col-lg-4' key={product.id}>
                            <div className='card my-3'>
                                <div style={{ width: "100%", height: "250px" }}>
                                    <img src={product.image} alt={product.productName} className='img-fluid w-100 h-100' />
                                </div>
                                <div className='card-body'>
                                    <h3 className='text-primary'>{product.productName}</h3>
                                    <p className='text-secondary'>{product.price}</p>
                                    <p className='text-secondary'>{product.description}</p>
                                </div>
                                <div className='d-flex justify-content-between p-3'>
                                    <button className='btn btn-primary'>Add To Cart</button>
                                    <button onClick={() => handleClick(product.id)} className='btn btn-secondary'>View Details</button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Product