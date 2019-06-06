import React from 'react'
import CartTotal from "../../../features/Cart/CartTotal"
import CartProductList from "../../../features/Cart/CartProductList"

const CartPage = ({
    productsInCart,
}) => {
    return (
        <div>
            <h1 className="page-title"> Cart Page</h1>
            <div className="cart text-center">
                <CartProductList 
                productsInCart={productsInCart}
                />
                <div>
                  <CartTotal
                  productsInCart={productsInCart}
                  />
                </div>
            </div>
        </div>
        
    )
}


export default CartPage