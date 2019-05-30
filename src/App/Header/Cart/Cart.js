import React from 'react'
import {keys} from 'lodash'
import './cart.css'

import products from '../../Main/Products/products'


console.log(products)
const Cart= ({
	productsInCart,
}) => {
    return (
        
					<div className="cart text-center">
						{
							keys(productsInCart).map((productId)=>(
								<div key={productId}> 
								<span>{products[productId-1].name}</span>: <span>{productsInCart[productId]}</span></div>
							))
						}
					</div>
				
    )
}

export default Cart