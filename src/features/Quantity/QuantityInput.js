import React from 'react'


const QuantityInput =({
    onDecrementClick,
    onIncrementClick,
    productCount,
    deleteOnDecrementClick,
    minValue=Number.MIN_SAFE_INTEGER,
    maxValue=10
}) => {
    return(
        <div className="product-quantity"> 
                    <button
                        onClick={onDecrementClick}
                        onDoubleClick={deleteOnDecrementClick}
                        disabled={productCount <= minValue}
                    >-</button>
                    <input type="text" value={productCount} readOnly/>
                    <button
                        onClick={onIncrementClick}
                        disabled={productCount >= maxValue}
                    >+</button>
                </div>
        )}


export default QuantityInput