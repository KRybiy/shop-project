import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ProductListItem.css'

class ProductListItem extends Component {
        state = {
            productCount:1 
        }
        onIncrementClick(){
            this.setState((prevState)=>({
                productCount:prevState.productCount+1
            }))
        }
        static propTypes = {
            name:PropTypes.string.isRequired,
            description:PropTypes.string,
            price:PropTypes.number,
            type:PropTypes.string,
            capacity:PropTypes.number,
        }
    render () {
        const {
            name,
            description = "No description...",
            image,
            type,
            capacity,
            price,
        } = this.props
        return (
           
            <div className="product-list-item">
                <div className="product-img">
                    <img src={image} alt=""/>
                </div>
                <h2 className="product-title"> {name}</h2>
                <div className="product-description"> {description}</div>
                <div className="product-features"> Type: {type} </div>
                <div className="product-features"> Capacity: {capacity} Gb</div>
                <div className="product-quantity"> 
                    <button>-</button>
                    <input type="text" value={this.state.productCount} readOnly/>
                    <button
                        onClick={()=>this.onIncrementClick()}
                    >+</button>
                </div>
                <div className="product-price"> {price}$</div>
                <button className="btn-add-to-cart"> Add to Cart </button>
            </div>
        )
    }
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