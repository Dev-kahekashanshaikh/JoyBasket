import "./ProductCategoryCard.css";

const ProductCategoryCard = ({
    category,
    products = [],
    onClick,
}) => {

    const categoryProducts = products.filter(
        (product) =>
            product.category === category
    );

    const previewImages = categoryProducts
        .slice(0, 3)
        .map((product) => product.thumbnail);

    const averageRating =
        categoryProducts.length > 0
            ? (
                categoryProducts.reduce(
                    (total, product) =>
                        total + product.rating,
                    0
                ) / categoryProducts.length
            ).toFixed(1)
            : "0.0";

    const highestDiscount =
        categoryProducts.length > 0
            ? Math.max(
                ...categoryProducts.map(
                    (product) =>
                        product.discountPercentage
                )
            )
            : 0;

    const startingPrice =
        categoryProducts.length > 0
            ? Math.min(
                ...categoryProducts.map(
                    (product) => product.price
                )
            )
            : 0;

    return (
        <article
            className="product-category-card"
            onClick={() => onClick(category)}
        >

            {/* =================================
                Images
            ================================= */}

            <div className="product-category-images">

                {previewImages.map(
                    (image, index) => (
                        <div
                            className="category-preview-image"
                            key={index}
                        >
                            <img
                                src={image}
                                alt={category}
                            />
                        </div>
                    )
                )}

            </div>


            {/* =================================
                Information
            ================================= */}

            <div className="product-category-info">

                <span className="product-category-label">
                    Explore Category
                </span>

                <h2>
                    {category}
                </h2>

                <div className="category-rating">

                    <span>
                        ★
                    </span>

                    <strong>
                        {averageRating}
                    </strong>

                    <small>
                        ({categoryProducts.length} products)
                    </small>

                </div>

                <div className="category-offer">

                    Up to{" "}
                    <strong>
                        {Math.round(highestDiscount)}% OFF
                    </strong>

                </div>

                <p className="category-starting-price">
                    Starting from{" "}
                    <strong>
                        ${startingPrice.toFixed(2)}
                    </strong>
                </p>

            </div>


           

        </article>
    );
};

export default ProductCategoryCard;