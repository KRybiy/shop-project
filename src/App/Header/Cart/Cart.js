import React from 'react'
import {keys} from 'lodash'
import './cart.css'

import products from '../../Main/Products/products'

const productsMap = products.reduce((accObj,product) => ({
	...accObj,
	[product.id]:product
}),{})

console.log(products)
console.log(productsMap)

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
					</div>
				
    )
}

export default Cart