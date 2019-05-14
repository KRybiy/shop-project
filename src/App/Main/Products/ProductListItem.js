import React from 'react'

const ProductListItem = () => {
    return (
        <div className="product-list-item">
            <h2 className="product-name"> iPhone XS Max </h2>
            <div className="product-description"> This is iphone XS Max </div>
            <div className="product-features"> Type: phone </div>
            <div className="product-features"> Capacity: 64 Gb</div>
            <div className="product-price"> 1000$ </div>
            <button className="btn-add-to-cart"> Add to Cart </button>
        </div>
    )
}

export default ProductListItem