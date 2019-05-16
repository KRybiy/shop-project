import React from 'react'
import PropTypes from 'prop-types'
import './ProductListItem.css'
const ProductListItem = ({
    name,
    description = "No description...",
    type,
    capacity,
    price,
    image = "images/products/someimage.png",
}) => {
    return (
        <div className="product-list-item">
            <div className="product-img">
                <img src={image} alt=""/>
            </div>
            <h2 className="product-title"> {name}</h2>
            <div className="product-description"> {description}</div>
            <div className="product-features"> Type: {type} </div>
            <div className="product-features"> Capacity: {capacity} Gb</div>
            <div className="product-price"> {price}$</div>
            <button className="btn-add-to-cart"> Add to Cart </button>
        </div>
    )
}

ProductListItem.propTypes = {
    name:PropTypes.string.isRequired,
    image:PropTypes.string,
    description:PropTypes.string,
    type:PropTypes.string.isRequired,
    capacity:PropTypes.number.isRequired,
    price:PropTypes.number.isRequired,
}
export default ProductListItem