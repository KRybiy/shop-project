import React, {Component} from 'react'
import '../common/style/reset.css'
import '../common/style/base.css'


import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

class App extends Component {
    
    state ={
        productsInCart: {
            '1':7,
            '2':10,
        }
    }

    addProductToCart = (price,count)=>{ 
        this.setState((prevState)=>({
            cartData:{
            totalCount:prevState.cartData.totalCount+count,
            price:prevState.cartData.price+(price*count),
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
            />
            <Footer/>
             </div>
        )
    }
}


export default App