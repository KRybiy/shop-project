import React from 'react'
import ProductList from './Products/ProductsList';
import {Route} from 'react-router-dom'

import CartPage from './CartPage/CartPage'
import PaymentPage from './Payment'
import ShippingPage from './Shipping'

const Main= ({
	addProductToCart,
	productsInCart,
	removeProductFromCart,
	changeProductQuantity,
}) => {
    return (
        <main className="main">
		<div className="container">
			<div className="row">
				<div className="col-lg-3">
					filter
				</div>
				<div className="col-lg-9">
					<Route exact path="/" render={()=> (
						<ProductList
						addProductToCart={addProductToCart}
						/>	
					)}/>
					<Route path="/cart" render={()=>(
							<CartPage
							productsInCart={productsInCart}
							removeProductFromCart={removeProductFromCart}
							changeProductQuantity={changeProductQuantity}/>
						)}/>
					<Route path="/payment" component={PaymentPage}/>
					<Route path="/shipping" component={ShippingPage}/>
				</div>
			</div>
		</div>
	</main>
    )
}

export default Main