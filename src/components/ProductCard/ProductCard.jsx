import { useWishlist } from "../../context/WishlistContext";

import "./ProductCard.css";

const ProductCard = ({
    product,
    onClick,
}) => {

    const {
        toggleWishlist,
        isInWishlist,
    } = useWishlist();


    // =========================================
    // DISCOUNT
    // =========================================

    const discount = Math.round(
        product.discountPercentage || 0
    );


    // =========================================
    // WISHLIST
    // =========================================

    const handleWishlist = (event) => {

        // Prevent product card click
        event.stopPropagation();

        toggleWishlist(product);
    };


    // =========================================
    // OLD PRICE
    // =========================================

    const originalPrice =
        product.discountPercentage > 0
            ? product.price /
              (1 - product.discountPercentage / 100)
            : product.price;


    return (

        <article
            className="product-card"
            onClick={onClick}
        >

            {/* =================================
                DISCOUNT
            ================================= */}

            {discount > 0 && (

                <div className="product-discount">

                    -{discount}%

                </div>

            )}


            {/* =================================
                WISHLIST
            ================================= */}

            <button
                type="button"
                className={`product-wishlist ${
                    isInWishlist(product.id)
                        ? "active"
                        : ""
                }`}
                aria-label={
                    isInWishlist(product.id)
                        ? `Remove ${product.title} from wishlist`
                        : `Add ${product.title} to wishlist`
                }
                onClick={handleWishlist}
            >

                {isInWishlist(product.id)
                    ? "♥"
                    : "♡"
                }

            </button>


            {/* =================================
                IMAGE
            ================================= */}

            <div className="product-card-image">

                <img
                    src={product.thumbnail}
                    alt={product.title}
                    loading="lazy"
                />

            </div>


            {/* =================================
                INFORMATION
            ================================= */}

            <div className="product-card-info">

                {/* Category */}

                <span className="product-card-category">

                    {product.category}

                </span>


                {/* Product Name */}

                <h3 title={product.title}>

                    {product.title}

                </h3>


                {/* Rating */}

                <div className="product-card-rating">

                    <span>
                        ★
                    </span>

                    <strong>
                        {Number(product.rating || 0).toFixed(1)}
                    </strong>

                </div>


                {/* Price */}

                <div className="product-card-price">

                    <strong>
                        $
                        {Number(product.price || 0).toFixed(2)}
                    </strong>


                    {discount > 0 && (

                        <del>
                            $
                            {Number(
                                originalPrice
                            ).toFixed(2)}
                        </del>

                    )}

                </div>


                {/* View Details */}

                <span className="view-product">

                    View Details →

                </span>

            </div>

        </article>
    );
};


export default ProductCard;