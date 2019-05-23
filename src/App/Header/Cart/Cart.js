import React from 'react'
import './cart.css'
const Cart= (props) => {
    return (
        
					<div className="cart text-center">
						<div className="products-count">{props.totalCount}</div>
						<div className="products-price">${props.price}</div>
					</div>
				
    )
}

export default Cart