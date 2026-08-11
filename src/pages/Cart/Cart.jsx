import { useCart } from "../../context/CartContext";

import "./Cart.css";

const Cart = () => {

    const {
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
    } = useCart();


    // =========================================
    // EMPTY CART
    // =========================================

    if (cartItems.length === 0) {

        return (
            <main className="cart-page">

                <div className="container">

                    <div className="empty-cart">

                        <span className="empty-cart-icon">
                            🛒
                        </span>

                        <h1>
                            Your Cart is Empty
                        </h1>

                        <p>
                            Looks like you haven't added
                            anything to your cart yet.
                        </p>

                    </div>

                </div>

            </main>
        );
    }


    // =========================================
    // CART PAGE
    // =========================================

    return (
        <main className="cart-page">

            <div className="container">

                {/* =================================
                    HEADER
                ================================= */}

                <div className="cart-header">

                    <span className="cart-eyebrow">
                        JoyBasket
                    </span>

                    <h1>
                        Your Cart
                    </h1>

                    <p>
                        {totalItems}{" "}
                        {totalItems === 1
                            ? "item"
                            : "items"}{" "}
                        in your cart
                    </p>

                </div>


                {/* =================================
                    CART CONTENT
                ================================= */}

                <div className="cart-layout">


                    {/* =================================
                        CART ITEMS
                    ================================= */}

                    <section className="cart-items">

                        {cartItems.map((item) => (

                            <article
                                className="cart-item"
                                key={item.id}
                            >

                                {/* IMAGE */}

                                <div className="cart-item-image">

                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                    />

                                </div>


                                {/* DETAILS */}

                                <div className="cart-item-details">

                                    <span className="cart-item-category">
                                        {item.category}
                                    </span>

                                    <h2>
                                        {item.title}
                                    </h2>

                                    <p className="cart-item-brand">
                                        {item.brand}
                                    </p>


                                    <strong className="cart-item-price">
                                        ₹
                                        {Math.round(
                                            item.price * 83
                                        ).toLocaleString("en-IN")}
                                    </strong>

                                </div>


                                {/* QUANTITY */}

                                <div className="cart-item-quantity">

                                    <button
                                        type="button"
                                        onClick={() =>
                                            decreaseQuantity(
                                                item.id
                                            )
                                        }
                                    >
                                        −
                                    </button>

                                    <span>
                                        {item.quantity}
                                    </span>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            increaseQuantity(
                                                item.id
                                            )
                                        }
                                    >
                                        +
                                    </button>

                                </div>


                                {/* ITEM TOTAL */}

                                <strong className="cart-item-total">

                                    ₹
                                    {Math.round(
                                        item.price *
                                        item.quantity *
                                        83
                                    ).toLocaleString("en-IN")}

                                </strong>


                                {/* REMOVE */}

                                <button
                                    type="button"
                                    className="cart-item-remove"
                                    onClick={() =>
                                        removeFromCart(
                                            item.id
                                        )
                                    }
                                >
                                    Remove
                                </button>

                            </article>

                        ))}

                    </section>


                    {/* =================================
                        CART SUMMARY
                    ================================= */}

                    <aside className="cart-summary">

                        <div className="cart-summary-header">

                            <h2>
                                Order Summary
                            </h2>

                        </div>


                        <div className="cart-summary-row">

                            <span>
                                Items
                            </span>

                            <strong>
                                {totalItems}
                            </strong>

                        </div>


                        <div className="cart-summary-row">

                            <span>
                                Subtotal
                            </span>

                            <strong>
                                ₹
                                {Math.round(
                                    totalPrice * 83
                                ).toLocaleString("en-IN")}
                            </strong>

                        </div>


                        <div className="cart-summary-row">

                            <span>
                                Delivery
                            </span>

                            <strong>
                                FREE
                            </strong>

                        </div>


                        <div className="cart-summary-total">

                            <span>
                                Total
                            </span>

                            <strong>
                                ₹
                                {Math.round(
                                    totalPrice * 83
                                ).toLocaleString("en-IN")}
                            </strong>

                        </div>


                        <button
                            type="button"
                            className="cart-checkout-btn"
                        >
                            Proceed to Checkout
                        </button>


                        <button
                            type="button"
                            className="cart-clear-btn"
                            onClick={clearCart}
                        >
                            Clear Cart
                        </button>

                    </aside>

                </div>

            </div>

        </main>
    );
};

export default Cart;