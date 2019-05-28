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
            '2':4,
        }
    }

    addProductToCart (productId,count){ 
        this.setState((prevState)=>({
            productsInCart:{
            "1":prevState.productsInCart['1']+count,
            }
        }))
    }
    render () {
        return (
            <div>
            <Header
                productsInCart={this.state.productsInCart}
                
            />
            
            <button onClick={()=>this.addProductToCart(1,1)}>add to cart</button>
            <Main
            addProductToCart={this.addProductToCart}
            />
            <Footer/>
             </div>
        )
    }
}


export default App