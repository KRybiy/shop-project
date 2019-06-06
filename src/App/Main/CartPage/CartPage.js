import React from 'react'
import {keys} from 'lodash'
import products, { getProductsMap } from './../Products/products'


const CartPage = ({
    productsInCart,
    productsMap = getProductsMap(products),
}) => {
    return (
        <div>
            <h1 className="page-title"> Cart Page</h1>
            <div className="cart text-center">
                {    //[1,2]
                        keys(productsInCart).map((productId)=>{
                        return (
                            <div key={productId}>
                                <span>{productsMap[productId].name}</span>:<span>{productsInCart[productId]}:</span> <span>Ціна за один елемент = {productsMap[productId].price}</span>
                            </div>
                        )
                        
                    })
                }
                <div>
                    Total : {
                            keys(productsInCart).reduce((total,productId)=>(
                                total + (productsMap[productId].price * productsInCart[productId])
                            ),0)
                    } $
                </div>
            </div>
        </div>
        
    )
}


export default CartPage