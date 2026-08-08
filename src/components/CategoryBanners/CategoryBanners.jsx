import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import "./CategoryBanners.css";

const CategoryBanners = ({ products = [] }) => {

    const navigate = useNavigate();

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

        // Pick 3 categories for now
        const selectedCategories = [
            categories[2],
            categories[12],
            categories[19],
        ];

        // Create banner product for each category
        return selectedCategories
            .filter(Boolean)
            .map((category) => {

                const categoryProducts =
                    groupedCategories[category];

                // Pick one product from category
                const product =
                    categoryProducts[
                        Math.floor(
                            Math.random() *
                            categoryProducts.length
                        )
                    ];

                return product;
            });

    }, [products]);


    const handleCategoryClick = (category) => {

        console.log("Selected category:", category);

        navigate(
            `products/category/${encodeURIComponent(category)}`
        );
    };


    return (
        <section className="category-banners">

            <div className="container">

                <h2>Most Popular Categories</h2>

                <div className="category-banners-grid">

                    {categoryProducts.map((product) => (

                        <div
                            className="category-banner"
                            key={product.id}
                            onClick={() =>
                                handleCategoryClick(
                                    product.category
                                )
                            }
                        >

                            <img
                                src={product.thumbnail}
                                alt={product.title}
                            />

                            <div className="category-banner-content">

                                <span className="category-name">
                                    {product.category}
                                </span>

                                <h3>
                                    {product.title}
                                </h3>

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
                                        {Math.round(
                                            product.discountPercentage
                                        )}
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