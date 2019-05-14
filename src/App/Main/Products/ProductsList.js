import React from 'react'
import ProductListItem from './ProductListItem';
import products from './products.js'

const ProductList = () => {
    return (
        <div>
            <h1 className="page-title"> Products List </h1>
            <div className="row"> 
               {
                   products.map((product) => (
                        <div className="col-lg-6" key={product.id}>
                            <ProductListItem
                            name={product.name}
                            description={product.description}
                            type={product.type}
                            capacity={product.capacity}
                            price={product.price}
                            />
                        </div>
                       ))
                   }
               
            </div>
        </div>
    )
}

export default ProductList