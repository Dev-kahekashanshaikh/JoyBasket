import { useMemo } from "react";

import CategoryCard from "../CategoryCard/CategoryCard";

import "./Categories.css";

const Categories = ({ products = [], onCategorySelect }) => {

    const categories = useMemo(() => {

        const categoryMap = new Map();

        products.forEach((product) => {

            if (!product.category) return;

            if (!categoryMap.has(product.category)) {

                categoryMap.set(product.category, {
                    id: product.category,
                    title: product.category,
                    image: product.thumbnail,
                });

            }

        });

        return Array.from(categoryMap.values());

    }, [products]);

    const handleCategoryClick = (category) => {

        console.log("Selected category:", category);

        if (onCategorySelect) {
            onCategorySelect(category);
        }

    };

    return (
        <section className="categories">

            <div className="container">

                <div className="section-heading">

                    <span className="section-eyebrow">
                        Shop by Category
                    </span>

                    <h2>
                        Explore JoyBasket
                    </h2>

                    <p>
                        Discover everything you need across
                        our wide range of categories.
                    </p>

                </div>

                <div className="categories-grid">

                    {categories.slice(0, 20).map((category) => (

                        <CategoryCard
                            key={category.id}
                            category={category}
                            onClick={() =>
                                handleCategoryClick(category.title)
                            }
                        />

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Categories;