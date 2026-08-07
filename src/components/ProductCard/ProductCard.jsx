import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";

import "./ProductCard.css";

const ProductCard = ({ product }) => {
    const discount = Math.round(product.discountPercentage);

    return (
        <article className="product-card">

            <div className="product-card-image">

                <img
                    src={product.thumbnail}
                    alt={product.title}
                />

                <span className="product-discount">
                    -{discount}%
                </span>

                <button
                    type="button"
                    className="product-wishlist"
                    aria-label={`Add ${product.title} to wishlist`}
                >
                    <HiOutlineHeart />
                </button>

            </div>

            <div className="product-card-content">

                <span className="product-category">
                    {product.category}
                </span>

                <h3 className="product-title">
                    {product.title}
                </h3>

                <div className="product-rating">
                    <span>★</span>
                    <span>{product.rating}</span>
                </div>

                <div className="product-price">
                    <span className="product-current-price">
                        ${product.price}
                    </span>

                    <span className="product-original-price">
                        $
                        {(
                            product.price /
                            (1 - product.discountPercentage / 100)
                        ).toFixed(2)}
                    </span>
                </div>

                <button
                    type="button"
                    className="btn btn-primary product-cart-btn"
                >
                    <HiOutlineShoppingCart />
                    Add to Cart
                </button>

            </div>

        </article>
    );
};

export default ProductCard;