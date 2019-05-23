import React from 'react'
import './cart.css'
const Cart= ({
	totalCount,
	price,
}) => {
    return (
        
					<div className="cart text-center">
						<div className="products-count">{totalCount}</div>
						<div className="products-price">${price}</div>
					</div>
				
    )
}

export default Cart