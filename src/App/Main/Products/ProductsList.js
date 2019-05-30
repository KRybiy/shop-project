import React from 'react'
import ProductListItem from './ProductListItem';
import products from './products.js'

const ProductList = ({
    addProductToCart,
}
) => {
    return (
        <div>
            <h1 className="page-title"> Products List </h1>
            <div className="row"> 
               {
                   products.map(({
                    id,
                    image,
                    name,
                    description,
                    type,
                    capacity,
                    price,
                   }) => (
                        <div className="col-lg-6" key={id}>
                            <ProductListItem
                            id={id}
                            addProductToCart={addProductToCart}
                            image={image}
                            name={name}
                            description={description}
                            type={type}
                            capacity={capacity}
                            price={price}
                            />
                        </div>
                       ))
                   }
               
            </div>
        </div>
    )
}

export default ProductList