import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = ({ products = [] }) => {

    if (products.length === 0) {
        return (
            <div className="no-products">
                <p>
                    No products found for this category.
                </p>
            </div>
        );
    }

    return (
        <div className="category-products-grid">

            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}

        </div>
    );
};

export default ProductGrid;