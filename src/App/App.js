import React, {Component} from 'react'
import '../common/style/reset.css'
import '../common/style/base.css'


import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

class App extends Component {
    
    state ={
        cartData: {
            
            price:0,
            totalCount:0,
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
                totalCount={this.state.cartData.totalCount}
                price={this.state.cartData.price}
            />
            <button onClick={()=>this.addProductToCart(500,5)}>Add to cart 
            </button>
            <Main/>
            <Footer/>
             </div>
        )
    }
}


export default App