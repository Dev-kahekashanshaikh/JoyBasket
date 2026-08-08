import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/Layout/MainLayout";

import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Cart from "../pages/Cart/Cart";
import Wishlist from "../pages/Wishlist/Wishlist";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import ProductCategory from "../pages/ProductCategory/ProductCategory";

const AppRoutes = () => {
    return (
        <Routes>

            <Route element={<MainLayout />}>

                <Route path="/" element={<Home />} />

                <Route path="/products" element={<Products />} />
                <Route
                    path="/products/category/:category"
                    element={<ProductCategory />}
                />

                <Route path="/cart" element={<Cart />} />

                <Route path="/wishlist" element={<Wishlist />} />

                <Route path="/about" element={<About />} />

                <Route path="/contact" element={<Contact />} />



            </Route>

        </Routes>
    );
};

export default AppRoutes;