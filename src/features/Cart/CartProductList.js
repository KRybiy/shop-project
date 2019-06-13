import React from 'react'
import {keys} from 'lodash'
import products, {getProductsMap} from "../../App/Main/Products/products"
import CartProductListItem from './CartProductListItem'

const CartProductList= ({
    productsInCart,
    productsMap = getProductsMap(products),
    CartListItemComponent = CartProductListItem,
    removeProductFromCart
}) => { 
    return (
        <div>
        {    
                keys(productsInCart).map((productId)=>{
                return (
                    <CartListItemComponent
                        productCount={productsInCart[productId]}
                        product = {productsMap[productId]}
                        key={productId}
                        removeProductFromCart={removeProductFromCart}
                    />
                )
                
            })
        }
        </div>)
    }

export default CartProductList