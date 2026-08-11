import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

import "./Wishlist.css";

const Wishlist = () => {

    const {
        wishlistItems,
        toggleWishlist,
        isInWishlist,
        removeFromWishlist,
        clearWishlist,
    } = useWishlist();


    const {
        addToCart,
    } = useCart();


    // =========================================
    // ADD WISHLIST ITEM TO CART
    // =========================================

    const handleAddToCart = (product) => {

        addToCart(product, 1);

        // Remove from wishlist after adding
        removeFromWishlist(product.id);
    };


    // =========================================
    // EMPTY WISHLIST
    // =========================================

    if (wishlistItems.length === 0) {

        return (
            <main className="wishlist-page">

                <div className="container">

                    <div className="empty-wishlist">

                        <div className="empty-wishlist-icon">
                            ♡
                        </div>

                        <h1>
                            Your Wishlist is Empty
                        </h1>

                        <p>
                            Save products you love
                            and find them here later.
                        </p>

                    </div>

                </div>

            </main>
        );
    }


    // =========================================
    // WISHLIST PAGE
    // =========================================

    return (
        <main className="wishlist-page">

            <div className="container">

                {/* =================================
                    HEADER
                ================================= */}

                <div className="wishlist-header">

                    <span className="wishlist-eyebrow">
                        JoyBasket
                    </span>

                    <h1>
                        My Wishlist
                    </h1>

                    <p>
                        {wishlistItems.length}{" "}
                        {wishlistItems.length === 1
                            ? "item"
                            : "items"}{" "}
                        saved
                    </p>

                </div>


                {/* =================================
                    WISHLIST ACTIONS
                ================================= */}

                <div className="wishlist-actions">

                    <span>
                        {wishlistItems.length} saved items
                    </span>

                    <button
                        type="button"
                        onClick={clearWishlist}
                    >
                        Clear Wishlist
                    </button>

                </div>


                {/* =================================
                    WISHLIST GRID
                ================================= */}

                <div className="wishlist-grid">

                    {wishlistItems.map((product) => (

                        <article
                            className="wishlist-card"
                            key={product.id}
                        >

                            {/* IMAGE */}

                            <div className="wishlist-image">

                                <img
                                    src={
                                        product.thumbnail ||
                                        product.images?.[0]
                                    }
                                    alt={product.title}
                                />

                            </div>


                            {/* INFORMATION */}

                            <div className="wishlist-info">

                                <span className="wishlist-category">
                                    {product.category}
                                </span>

                                <h2>
                                    {product.title}
                                </h2>

                                <p className="wishlist-brand">
                                    {product.brand}
                                </p>

                                <strong className="wishlist-price">
                                    ₹
                                    {Math.round(
                                        product.price * 83
                                    ).toLocaleString("en-IN")}
                                </strong>


                                {/* =================================
                                    ACTIONS
                                ================================= */}

                                <div className="wishlist-card-actions">

                                    {/* ADD TO CART */}

                                    <button
                                        type="button"
                                        className="wishlist-cart-btn"
                                        onClick={() =>
                                            handleAddToCart(
                                                product
                                            )
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>


                                    {/* REMOVE */}

                                    <button
                                        type="button"
                                        className="wishlist-remove"
                                        onClick={() =>
                                            removeFromWishlist(
                                                product.id
                                            )
                                        }
                                    >
                                        Remove
                                    </button>

                                </div>

                            </div>


                            {/* =================================
                                WISHLIST TOGGLE
                            ================================= */}

                            <button
                                type="button"
                                className="wishlist-heart-btn"
                                onClick={() =>
                                    toggleWishlist(product)
                                }
                                aria-label={
                                    isInWishlist(product.id)
                                        ? "Remove from wishlist"
                                        : "Add to wishlist"
                                }
                            >
                                {isInWishlist(product.id)
                                    ? "♥"
                                    : "♡"}
                            </button>

                        </article>

                    ))}

                </div>

            </div>

        </main>
    );
};

export default Wishlist;