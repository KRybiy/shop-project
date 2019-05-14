import React from 'react'
import ProductListItem from './ProductListItem';

const ProductList = () => {
    return (
        <div>
            <h1 className="page-title"> Products List </h1>
            <div className="row"> 
                <div className="col-lg-6">
                    <ProductListItem
                    name="iPhone 7"
                    description="This is iPhone 7"
                    type='phone'
                    capacity='16'
                    price='378'
                    />
                </div>
                <div className="col-lg-6">
                    <ProductListItem
                    name="iPhone 8"
                    description="This is iPhone 8"
                    type='phone'
                    capacity='32'
                    price='599'
                    />
                </div>
                <div className="col-lg-6">
                    <ProductListItem
                    name="iPhone 9"
                    description="This is iPhone 9"
                    type='phone'
                    capacity='256'
                    price='1879'
                    />
                </div>
                <div className="col-lg-6">
                    <ProductListItem
                    name="iPhone 10"
                    description="This is iPhone 10"
                    type='phone'
                    capacity='124'
                    price='699'
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductList