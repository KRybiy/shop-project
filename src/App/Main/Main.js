import React from 'react'
import {Route} from 'react-router-dom'

import CartPage from './CartPage/CartPage'
import ProductList from './Products/ProductsList';
import PaymentPage from './Payment'
import ShippingPage from './Shipping'
import ProductPage from './Products/ProductPage'

const Main= ({
	addProductToCart,
	productsInCart,
	removeProductFromCart,
	changeProductQuantity,
	removeLike,
	addLike,
	likedProductsState,
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
						addLike={addLike}
						removeLike={removeLike}
						likedProductsState={likedProductsState}
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
					<Route path="/products/:productId" component={ProductPage}/>
				</div>
			</div>
		</div>
	</main>
    )
}

export default Main