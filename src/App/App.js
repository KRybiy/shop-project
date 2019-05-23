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
    render () {
        return (
            <div>
            <Header
                totalCount={this.state.cartData.totalCount}
                price={this.state.cartData.price}
            />
            <Main/>
            <Footer/>
             </div>
        )
    }
}


export default App