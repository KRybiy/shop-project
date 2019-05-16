import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import './ProductListItem.css'

class ProductListItem extends Component {
    render () {
        return (
            <div className="product-list-item">
                <div className="product-img">
                    <img src={this.props.image} alt=""/>
                </div>
                <h2 className="product-title"> {this.props.name}</h2>
                <div className="product-description"> {this.props.description}</div>
                <div className="product-features"> Type: {this.props.type} </div>
                <div className="product-features"> Capacity: {this.props.capacity} Gb</div>
                <div className="product-quantity"> 
                    <button>-</button>
                    <input type="text" value="1"/>
                    <button>+</button>
                </div>
                <div className="product-price"> {this.props.price}$</div>
                <button className="btn-add-to-cart"> Add to Cart </button>
            </div>
        )
    }
}


        // ProductListItem.propTypes = {
        //     name:PropTypes.string.isRequired,
        //     image:PropTypes.string,
        //     description:PropTypes.string,
        //     type:PropTypes.string.isRequired,
        //     capacity:PropTypes.number.isRequired,
        //     price:PropTypes.number.isRequired,
        // }
export default ProductListItem