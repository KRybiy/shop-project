import React, {Component} from 'react'
import '../common/style/reset.css'
import '../common/style/base.css'
import {omit} from 'lodash'


import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

class App extends Component {
    
    state ={
        productsInCart: {
           
        },
        likedProductsState: {
            '1': true,
            '2': false,
        }
    }

    addProductToCart = (productId,count) => { 
        this.setState((prevState)=>({
            productsInCart:{
                ...prevState.productsInCart,
            [productId]:(prevState.productsInCart[productId] || 0)+count,
            }
        }))
    }

    removeProductFromCart = (productId) =>{
        this.setState((prevState)=>({
            productsInCart:omit(prevState.productsInCart,productId)
        }))
    }   

    changeProductQuantity = (productId,count) => {
        this.setState((prevState) => ({
            productsInCart:{
                ...prevState.productsInCart,
            [productId]: count,
            }
        }))
    }
    
    addLike = (productId) => {
        this.setState((prevState) => ({
            likedProductsState:{
                ...prevState.likedProductsState,
                [productId]: true,
            }
        }))
    }

    removeLike = (productId) => {
        this.setState((prevState) => ({
            likedProductsState:{
                ...prevState.likedProductsState,
                [productId]: false,
            }
        }))
    }

    render () {
        return (
            <div>
            <Header
                productsInCart={this.state.productsInCart}
            />
            <Main
            addProductToCart={this.addProductToCart}
            productsInCart={this.state.productsInCart}
            removeProductFromCart={this.removeProductFromCart}
            changeProductQuantity={this.changeProductQuantity}
            addLike={this.addLike}
            removeLike={this.removeLike}
            likedProductsState={this.state.likedProductsState}
            />
            <Footer/>
             </div>
        )
    }
}


export default App