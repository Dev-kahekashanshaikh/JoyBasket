import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState(() => {

        const savedCart = localStorage.getItem("joybasket-cart");

        return savedCart
            ? JSON.parse(savedCart)
            : [];
    });


    // Save cart whenever it changes
    useEffect(() => {

        localStorage.setItem(
            "joybasket-cart",
            JSON.stringify(cartItems)
        );

    }, [cartItems]);


    // =========================================
    // ADD TO CART
    // =========================================

    const addToCart = (product, quantity = 1) => {

        setCartItems((currentItems) => {

            const existingItem = currentItems.find(
                (item) => item.id === product.id
            );

            if (existingItem) {

                return currentItems.map((item) =>
                    item.id === product.id
                        ? {
                            ...item,
                            quantity:
                                item.quantity + quantity,
                        }
                        : item
                );
            }


            return [
                ...currentItems,

                {
                    ...product,
                    quantity,
                },
            ];

        });
    };


    // =========================================
    // UPDATE QUANTITY
    // =========================================

    const updateQuantity = (productId, quantity) => {

        if (quantity < 1) {
            removeFromCart(productId);
            return;
        }

        setCartItems((currentItems) =>
            currentItems.map((item) =>
                item.id === productId
                    ? {
                        ...item,
                        quantity,
                    }
                    : item
            )
        );
    };


    // =========================================
    // INCREASE
    // =========================================

    const increaseQuantity = (productId) => {

        setCartItems((currentItems) =>
            currentItems.map((item) =>
                item.id === productId
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                    : item
            )
        );
    };


    // =========================================
    // DECREASE
    // =========================================

    const decreaseQuantity = (productId) => {

        setCartItems((currentItems) =>
            currentItems
                .map((item) =>
                    item.id === productId
                        ? {
                            ...item,
                            quantity: item.quantity - 1,
                        }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };


    // =========================================
    // REMOVE
    // =========================================

    const removeFromCart = (productId) => {

        setCartItems((currentItems) =>
            currentItems.filter(
                (item) => item.id !== productId
            )
        );
    };


    // =========================================
    // CLEAR CART
    // =========================================

    const clearCart = () => {
        setCartItems([]);
    };


    // =========================================
    // TOTAL ITEMS
    // =========================================

    const totalItems = cartItems.reduce(
        (total, item) =>
            total + item.quantity,
        0
    );


    // =========================================
    // TOTAL PRICE
    // =========================================

    const totalPrice = cartItems.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );


    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                updateQuantity,
                increaseQuantity,
                decreaseQuantity,
                removeFromCart,
                clearCart,
                totalItems,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};


export const useCart = () => {

    const context = useContext(CartContext);

    if (!context) {
        throw new Error(
            "useCart must be used inside CartProvider"
        );
    }

    return context;
};