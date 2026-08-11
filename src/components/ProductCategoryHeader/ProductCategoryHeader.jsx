import { useNavigate } from "react-router-dom";
import "./ProductCategoryHeader.css";

const ProductCategoryHeader = ({
    category,
    productCount = 0,
}) => {

    const navigate = useNavigate();

    const handleShopNow = () => {
        const section = document.querySelector(".category-products-area");

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <section className="product-category-hero">

            {/* Decorative shapes */}
            <div className="hero-decoration hero-decoration-one"></div>
            <div className="hero-decoration hero-decoration-two"></div>

            <div className="product-category-hero-content">

                {/* Small badge */}
                <span className="products-eyebrow">
                    ✦ JOYBASKET STORE
                </span>

                {/* Main heading */}
                <h1>
                    {category}
                </h1>

                <p className="category-hero-description">
                    Discover handpicked {category} products
                    with amazing prices, quality and style.
                </p>

                {/* Sale announcement */}
                <div className="season-sale-badge">
                    <span>SEASON SALE</span>
                    <strong>UP TO 50% OFF</strong>
                </div>

                {/* Buttons / count */}
                <div className="category-hero-actions">

                    <button
                        type="button"
                        className="hero-shop-btn"
                        onClick={handleShopNow}
                    >
                        Shop Now
                        <span>→</span>
                    </button>

                    <span className="category-product-count">
                        <strong>{productCount}</strong>
                        <small>Products Available</small>
                    </span>

                </div>

                {/* Brand highlights */}
                <div className="hero-brand-section">

                    <span>Popular Brands</span>

                    <div className="hero-brands">
                        <strong>Apple</strong>
                        <strong>Chanel</strong>
                        <strong>Gucci</strong>
                        <strong>Samsung</strong>
                        <strong>Dior</strong>
                    </div>

                </div>

            </div>

            {/* Right visual */}
            <div className="product-category-hero-visual">

                <div className="hero-sale-circle">
                    <span>SALE</span>
                    <strong>50%</strong>
                    <small>OFF</small>
                </div>

                <div className="hero-floating-card hero-card-one">
                    <span>🔥</span>
                    <div>
                        <strong>Trending</strong>
                        <small>Best Sellers</small>
                    </div>
                </div>

                <div className="hero-floating-card hero-card-two">
                    <span>⭐</span>
                    <div>
                        <strong>Top Rated</strong>
                        <small>Customer Favorites</small>
                    </div>
                </div>

                {/* Product visual */}
                <div className="hero-product-visual">
                    <div className="hero-product-circle"></div>

                    <div className="hero-product-content">
                        <span>NEW</span>
                        <strong>{category}</strong>
                        <small>Shop Collection</small>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default ProductCategoryHeader;