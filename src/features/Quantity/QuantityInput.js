import React from 'react'


const QuantityInput =({
    onDecrementClick,
    onIncrementClick,
    productCount
}) => {
    return(
        <div className="product-quantity"> 
                    <button
                        onClick={onDecrementClick}
                        disabled={productCount <= 1}
                    >-</button>
                    <input type="text" value={productCount} readOnly/>
                    <button
                        onClick={onIncrementClick}
                        disabled={productCount >= 5}
                    >+</button>
                </div>
        )}


export default QuantityInput