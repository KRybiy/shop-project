import React from 'react'
import {keys} from 'lodash'
import {Link} from 'react-router-dom'
import './cart.css'

import products from '../../Main/Products/products'

const productsMap = products.reduce((accObj,product) => ({
	...accObj,
	[product.id]:product
}),{})


const Cart= ({
	productsInCart,
}) => {
    return (
        
					<div className="cart text-center">
						{
							keys(productsInCart).map((productId)=>(
								<div key={productId}> 
								<span>{productsMap[productId].name}</span>: <span>{productsInCart[productId]}</span></div>
							))
						}
						<div>Total: {
							keys(productsInCart).reduce((total,productId) => (
								total + (productsMap[productId].price * productsInCart[productId])
							), 0)
						}$</div>
						<Link to="/cart"> Show Cart</Link>
					</div>
				
    )
}

export default Cart