import React, { useState } from 'react'
import { useParams } from "react-router-dom"
import { productArray } from './AllProducts'

const SingleProduct = () => {
    const { id } = useParams()
    //    const [product, setProduct] = useState({})

    const singleProduct = productArray.find((product) => product.id === parseInt(id))
    //    console.log("Single Product : ", singleProduct)
    //    setProduct(singleProduct)

    return (
        <div>
            <h1 className='text-center text-primary'>Displaying  Single Product for id {id}</h1>

            <div className='container d-flex align-items-center justify-content-between gap-2 '>
                <div className='card my-3 col-11 mx-auto col-md-6 col-lg-5 '>
                    <div style={{ width: "100%", height: "250px" }}>
                        <img src={singleProduct.image} alt={singleProduct.productName} className='img-fluid w-100 h-100' />
                    </div>
                    <div className='card-body'>
                        <h3 className='text-primary'>{singleProduct.productName}</h3>
                        <p className='text-secondary'>{singleProduct.price}</p>
                        <p className='text-secondary'>{singleProduct.description}</p>
                    </div>
                    <div className='d-flex justify-content-between p-3'>
                        <button className='btn btn-primary w-100'>Add To Cart</button>
                      
                    </div>
                </div>

                <div >
                    <h2>Other Images</h2>
                    <div className='d-flex align-items-center gap-3 flex-wrap'>
                        {singleProduct.OtherImages.map((image, index) => (
                            <div style={{width: "300px", height : "250px"}}>
                                <img src={image} alt={singleProduct.productName} key={index} className='img-fluid w-100 h-100' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct