import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import './ProductListItem.css'
import QuantityInput from '../../../features/Quantity/QuantityInput';

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
            return (
                <QuantityInput
                    minValue={1}
                    onDecrementClick={this.onDecrementClick}
                    onIncrementClick={this.onIncrementClick}
                    productCount={this.state.productCount}
                />
            )
        }
        

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
            isLiked = false,
        } = this.props
         return (
           
            <div className="product-list-item">
                <div className="product-img">
                    <img src={image} alt=""/>
                </div>
                <button>
                    {isLiked ? <span>&#10084;</span>: <span>&#9825;</span>}
                </button>
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

const mapStateToProps = (state,props) => ({
    isLiked: state[props.id]
})

export default connect(
    mapStateToProps,
)(ProductListItem)