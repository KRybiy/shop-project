import React, {Component} from 'react'
import '../common/style/reset.css'
import '../common/style/base.css'


import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

class App extends Component {
    
    state ={
        productsInCart: {
           
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

    removeProductFromCart = (productId) => {
        this.setState((prevState)=>({
            productsInCart:{
                ...prevState.productsInCart,
                [productId]:(prevState.delete[productId]),
            }
        }))
            }
                   

    render () {
        return (
            <div>
            <Header
                productsInCart={this.state.productsInCart}
            />
            <button
            onClick={()=> {this.removeProductFromCart (this.state.productCount)}}>remove</button>
            <Main
            addProductToCart={this.addProductToCart}
            productsInCart={this.state.productsInCart}
            />
            <Footer/>
             </div>
        )
    }
}


export default App