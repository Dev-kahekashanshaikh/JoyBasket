const ProductCategoryHeader = ({
    category,
    productCount = 0,
}) => {
    return (
        <div className="product-category-header">

            <span className="products-eyebrow">
                JoyBasket Store
            </span>

            <h1>
                {category}
            </h1>

            <p>
                Discover the best products
                available in this category.
            </p>

            <span className="category-product-count">
                {productCount} products
            </span>

        </div>
    );
};

export default ProductCategoryHeader;