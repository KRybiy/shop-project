import React from 'react'
import './ProductListItem.css'
const ProductListItem = (props) => {
    return (
        <div className="product-list-item">
            <h2 className="product-title"> {props.name}</h2>
            <div className="product-description"> {props.description}</div>
            <div className="product-features"> Type: {props.type} </div>
            <div className="product-features"> Capacity: {props.capacity} Gb</div>
            <div className="product-price"> {props.price}$</div>
            <button className="btn-add-to-cart"> Add to Cart </button>
        </div>
    )
}

export default ProductListItem