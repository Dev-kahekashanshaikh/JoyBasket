import ProductCard from "../ProductCard/ProductCard";

import "./ProductGrid.css";


const ProductGrid = ({
    products = [],
    onProductClick,
}) => {

    if (!products.length) {

        return (
            <div className="no-products">
                No products found.
            </div>
        );
    }


    return (

        <div className="category-products-grid">

            {products.map((product) => (

                <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() =>
                        onProductClick(product)
                    }
                />

            ))}

        </div>

    );
};


export default ProductGrid;