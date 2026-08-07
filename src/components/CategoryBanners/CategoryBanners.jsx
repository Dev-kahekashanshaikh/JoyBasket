import { useMemo } from "react";
import "./CategoryBanners.css";

const CategoryBanners = ({ products = [] }) => {
    const categoryProducts = useMemo(() => {
        // Group products by category
        const groupedCategories = {};

        products.forEach((product) => {
            if (!groupedCategories[product.category]) {
                groupedCategories[product.category] = [];
            }

            groupedCategories[product.category].push(product);
        });

        // Get all different categories
        const categories = Object.keys(groupedCategories);

        // Shuffle categories so different categories can appear
        // when the page/component opens
        // const shuffledCategories = [...categories].sort(
        //     () => Math.random() - 0.5
        // );
        const shuffledCategories=[categories[2],categories[12],categories[19]]

        // Pick 3 different categories
        return shuffledCategories.map((category) => {
            const categoryProducts = groupedCategories[category];

            // Pick one product from that category
            const product =
                categoryProducts[
                    Math.floor(Math.random() * categoryProducts.length)
                ];

            return product;
        });
    }, [products]);

    return (
        <section className="category-banners">
            <div className="container">
                <h2>Most Popular Categories</h2>

                <div className="category-banners-grid">
                    {categoryProducts.map((product) => (
                        <div
                            className="category-banner"
                            key={product.id}
                            onClick={() => {
                                console.log(
                                    "Selected category:",
                                    product.category
                                );
                            }}
                        >
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                            />

                            <div className="category-banner-content">
                                <span className="category-name">
                                    {product.category}
                                </span>

                                <h3>{product.title}</h3>

                                <p className="product-brand">
                                    {product.brand}
                                </p>

                                <div className="category-banner-bottom">
                                    <strong>
                                        Starting ₹
                                        {Math.round(
                                            product.price * 83
                                        ).toLocaleString("en-IN")}
                                    </strong>

                                    <span className="discount">
                                        {Math.round(product.discountPercentage)}
                                        % OFF
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryBanners;