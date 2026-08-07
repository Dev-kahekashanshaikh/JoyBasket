import { Link } from "react-router-dom";

import categories from "../../data/categories";

import "./ShopCategories.css";

const ShopCategories = () => {
    return (
        <section className="shop-categories-section">

            <div className="container">

                <div className="shop-categories-header">
                    <div>
                        <span className="section-eyebrow">
                            Browse Collection
                        </span>

                        <h2>
                        </h2>
                    </div>
                </div>

                <div className="shop-categories-grid">

                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            to={`/products?category=${category.id}`}
                            className="shop-category-card"
                        >
                            <div className="shop-category-image">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    loading="lazy"
                                />
                            </div>

                            <h3 className="shop-category-title">
                                {category.name}
                            </h3>
                        </Link>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default ShopCategories;