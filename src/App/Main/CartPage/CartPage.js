import React from 'react'
import CartTotal from "../../../features/Cart/CartTotal"
import CartProductList from "../../../features/Cart/CartProductList"
import CartProductListItemExtended from "../../../features/Cart/CartProductListItemExtended"

const CartPage = ({
    productsInCart,
    changeProductQuantity,
    removeProductFromCart,
}) => {
    return (
        <div>
            <h1 className="page-title"> Cart Page</h1>
            
                <CartProductList 
                productsInCart={productsInCart}
                CartListItemComponent={CartProductListItemExtended}
                removeProductFromCart={removeProductFromCart}
                changeProductQuantity={changeProductQuantity}
                />
                <div>
                  <CartTotal
                  productsInCart={productsInCart}
                  />
            </div>
        </div>
        
    )
}


export default CartPage