import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ProductListItem.css'

class ProductListItem extends Component {
        state = {
            productCount:1 
        }
        onIncrementClick = ()=>{
            this.setState((prevState)=>({
                productCount:prevState.productCount+1
            }))
        }
        
        onDecrementClick = ()=>{
            
            this.setState((prevState)=>({
                productCount:prevState.productCount-1,
                
            }))
        }
        renderQuantity () {
        return(
        <div className="product-quantity"> 
                    <button
                        onClick={this.onDecrementClick}
                        disabled={this.state.productCount <= 1}
                    >-</button>
                    <input type="text" value={this.state.productCount} readOnly/>
                    <button
                        onClick={this.onIncrementClick}
                        disabled={this.state.productCount >= 5}
                    >+</button>
                </div>
        )}

        static propTypes = {
            name:PropTypes.string.isRequired,
            image:PropTypes.string,
            description:PropTypes.string,
            price:PropTypes.number.isRequired,
            type:PropTypes.string.isRequired,
            capacity:PropTypes.number,
        }
    render () {
        const {
            id,
            name,
            description = "No description...",
            image,
            type,
            capacity,
            price,
            addProductToCart,
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
                {this.renderQuantity()}
                <div className="product-price"> {price}$</div>
                <button className="btn-add-to-cart"
                    onClick={()=> {addProductToCart (id,this.state.productCount)}}
                > Add to Cart </button>
            </div>
        )
    }
}


export default ProductListItem