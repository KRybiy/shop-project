import React from 'react'
import {keys} from 'lodash'
import products, {getProductsMap} from "../../App/Main/Products/products"


const CartProductList= ({
    productsInCart,
    productsMap = getProductsMap(products),
}) => { 
    return (
        <div>
        {    
                keys(productsInCart).map((productId)=>{
                return (
                    <div key={productId}>
                        <span>{productsMap[productId].name}</span>:<span>{productsInCart[productId]}:</span> <span>Ціна за один елемент = {productsMap[productId].price}</span>
                    </div>
                )
                
            })
        }
        </div>)
    }

export default CartProductList