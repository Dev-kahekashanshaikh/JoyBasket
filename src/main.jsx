import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/global.css";
import "./styles/responsive.css";

ReactDOM.createRoot(
    document.getElementById("root")
).render(
    <React.StrictMode>

        <BrowserRouter>

            <ProductProvider>

                <CartProvider>

                    <WishlistProvider>

                        <App />

                    </WishlistProvider>

                </CartProvider>

            </ProductProvider>

        </BrowserRouter>

    </React.StrictMode>
);