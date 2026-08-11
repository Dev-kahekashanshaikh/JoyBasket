import { useEffect, useMemo, useState } from "react";
// import { useCart } from "../../context/CartContext";
// import { useWishlist } from "../../context/WishlistContext";
// import { useNavigate } from "react-router-dom";

import "./ProductDetailsModal.css";


const ProductDetailsModal = ({
    product,
    products = [],
    onClose,
}) => {


    //   const navigate = useNavigate();

    // const { addToCart } = useCart();

    // const {
    //     toggleWishlist,
    //     isInWishlist,
    // } = useWishlist();


    const [activeImage, setActiveImage] = useState(0);

    const [quantity, setQuantity] = useState(1);

    // =========================================
    // ADD TO CART
    // =========================================

    // const handleAddToCart = (event) => {

    //     event.stopPropagation();

    //     addToCart(product, 1);

    //     navigate("/cart");
    // };


       


    // =========================================
    // WISHLIST
    // =========================================

    // const handleWishlist = (event) => {

    //     event.stopPropagation();

    //     toggleWishlist(product);
    // };


    // =========================================
    // CARD CLICK
    // =========================================

    const handleProductClick = () => {

        // Your existing product popup logic
    };


    // =========================================================
    // PRODUCT IMAGES
    // =========================================================

    const images = useMemo(() => {

        if (!product) {
            return [];
        }

        if (
            Array.isArray(product.images) &&
            product.images.length > 0
        ) {
            return product.images;
        }

        return [product.thumbnail];

    }, [product]);


    // =========================================================
    // RELATED PRODUCTS
    // =========================================================

    const relatedProducts = useMemo(() => {

        if (!product) {
            return [];
        }

        return products
            .filter(
                (item) =>
                    item.id !== product.id &&
                    item.category === product.category
            )
            .slice(0, 4);

    }, [products, product]);


    // =========================================================
    // ESC KEY
    // =========================================================

    useEffect(() => {

        const handleKeyDown = (event) => {

            if (event.key === "Escape") {
                onClose();
            }

        };


        document.addEventListener(
            "keydown",
            handleKeyDown
        );


        document.body.style.overflow = "hidden";


        return () => {

            document.removeEventListener(
                "keydown",
                handleKeyDown
            );

            document.body.style.overflow = "";

        };

    }, [onClose]);


    // =========================================================
    // IMAGE NAVIGATION
    // =========================================================

    const nextImage = () => {

        setActiveImage(
            (previous) =>
                (previous + 1) % images.length
        );

    };


    const previousImage = () => {

        setActiveImage(
            (previous) =>
                (previous - 1 + images.length) %
                images.length
        );

    };


    // =========================================================
    // ADD TO CART
    // =========================================================

    const handleAddToCart = () => {

        console.log(
            "Add to cart:",
            product,
            "Quantity:",
            quantity
        );

        // Connect your cart logic here

    };


    return (

        <div
            className="product-modal-overlay"
            onClick={onClose}
        >

            <div
                className="product-modal"
                onClick={(event) =>
                    event.stopPropagation()
                }
            >


                {/* =====================================
                    CLOSE
                ===================================== */}

                <button
                    type="button"
                    className="product-modal-close"
                    onClick={onClose}
                >
                    ×
                </button>


                {/* =====================================
                    PRODUCT DETAILS
                ===================================== */}

                <div className="product-modal-content">


                    {/* =================================
                        LEFT IMAGE SECTION
                    ================================= */}

                    <div className="product-modal-gallery">


                        <div className="product-main-image">

                            <img
                                src={images[activeImage]}
                                alt={product.title}
                            />


                            {images.length > 1 && (

                                <>
                                    <button
                                        className="gallery-arrow gallery-prev"
                                        onClick={previousImage}
                                    >
                                        ‹
                                    </button>

                                    <button
                                        className="gallery-arrow gallery-next"
                                        onClick={nextImage}
                                    >
                                        ›
                                    </button>
                                </>

                            )}

                        </div>


                        {/* Thumbnails */}

                        {images.length > 1 && (

                            <div className="product-thumbnails">

                                {images.map(
                                    (image, index) => (

                                        <button
                                            key={image}
                                            type="button"
                                            className={
                                                activeImage === index
                                                    ? "thumbnail active"
                                                    : "thumbnail"
                                            }
                                            onClick={() =>
                                                setActiveImage(index)
                                            }
                                        >

                                            <img
                                                src={image}
                                                alt=""
                                            />

                                        </button>

                                    )
                                )}

                            </div>

                        )}

                    </div>


                    {/* =================================
                        RIGHT DETAILS
                    ================================= */}

                    <div className="product-modal-details">


                        <span className="modal-category">
                            {product.category}
                        </span>


                        <h2>
                            {product.title}
                        </h2>


                        {product.brand && (

                            <p className="modal-brand">

                                Brand:

                                <strong>
                                    {product.brand}
                                </strong>

                            </p>

                        )}


                        {/* Rating */}

                        <div className="modal-rating">

                            <span>★</span>

                            <strong>
                                {Number(
                                    product.rating
                                ).toFixed(2)}
                            </strong>

                            <span>
                                / 5
                            </span>

                        </div>


                        {/* Price */}

                        <div className="modal-price">

                            <strong>
                                $
                                {Number(
                                    product.price
                                ).toFixed(2)}
                            </strong>

                            {product.discountPercentage > 0 && (

                                <span className="modal-discount">

                                    -
                                    {Math.round(
                                        product.discountPercentage
                                    )}
                                    %

                                </span>

                            )}

                        </div>


                        {/* Description */}

                        <p className="modal-description">

                            {product.description ||
                                "Premium quality product with excellent features and reliable performance."}

                        </p>


                        {/* Stock */}

                        <div className="modal-stock">

                            {product.stock > 0
                                ? `✓ ${product.stock} items available`
                                : "Out of stock"}

                        </div>


                        {/* Quantity */}

                        <div className="quantity-section">

                            <span>
                                Quantity
                            </span>

                            <div className="quantity-control">

                                <button
                                    type="button"
                                    onClick={() =>
                                        setQuantity(
                                            (previous) =>
                                                Math.max(
                                                    1,
                                                    previous - 1
                                                )
                                        )
                                    }
                                >
                                    −
                                </button>


                                <span>
                                    {quantity}
                                </span>


                                <button
                                    type="button"
                                    onClick={() =>
                                        setQuantity(
                                            (previous) =>
                                                previous + 1
                                        )
                                    }
                                >
                                    +
                                </button>

                            </div>

                        </div>


                        {/* Add to cart */}

                        <button
                            type="button"
                            className="modal-add-cart"
                            onClick={handleAddToCart}
                            disabled={product.stock === 0}
                        >

                            🛒 Add to Cart

                        </button>
                          {/* <button
                    type="button"
                    className="add-to-cart-btn modal-add-cart"
                    onClick={handleAddToCart}
                >
                    🛒 Add to Cart
                </button> */}


                    </div>

                </div>


                {/* =====================================
                    RELATED PRODUCTS
                ===================================== */}

                {relatedProducts.length > 0 && (

                    <section className="related-products-section">

                        <div className="related-products-heading">

                            <span>
                                YOU MAY ALSO LIKE
                            </span>

                            <h3>
                                Related Products
                            </h3>

                        </div>


                        <div className="related-products-grid">

                            {relatedProducts.map(
                                (item) => (

                                    <div
                                        className="related-product"
                                        key={item.id}
                                    >

                                        <div className="related-product-image">

                                            <img
                                                src={item.thumbnail}
                                                alt={item.title}
                                            />

                                        </div>


                                        <h4>
                                            {item.title}
                                        </h4>


                                        <p>
                                            $
                                            {Number(
                                                item.price
                                            ).toFixed(2)}
                                        </p>

                                    </div>

                                )
                            )}

                        </div>

                    </section>

                )}

            </div>

        </div>
    );
};


export default ProductDetailsModal;