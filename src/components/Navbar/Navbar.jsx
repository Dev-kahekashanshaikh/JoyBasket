
import { useState } from "react";
import {
    NavLink,
    useNavigate,
    useLocation,
} from "react-router-dom";
import logo from "../../assets/icons/joybasketLogo.png"
import {
    HiOutlineMagnifyingGlass,
    HiOutlineShoppingCart,
    HiOutlineUser,
    HiOutlineHeart,
    HiOutlineBars3,
    HiOutlineXMark,
} from "react-icons/hi2";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

import "./Navbar.css";


const Navbar = () => {

    // =========================================
    // STATES
    // =========================================

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchText, setSearchText] = useState("");


    // =========================================
    // ROUTER
    // =========================================

    const navigate = useNavigate();
    const location = useLocation();


    // =========================================
    // CART
    // =========================================

    const {
        totalItems,
    } = useCart();


    // =========================================
    // WISHLIST
    // =========================================

    const {
        wishlistItems,
    } = useWishlist();


    // =========================================
    // CLOSE MOBILE MENU
    // =========================================

    const closeMenu = () => {
        setIsMenuOpen(false);
    };


    // =========================================
    // SEARCH
    // =========================================

    // const handleSearch = (event) => {

    //     event.preventDefault();

    //     const search = searchText.trim();

    //     console.log("Search entered:", search);


    //     // Don't search empty text
    //     if (!search) {
    //         return;
    //     }


    //     // Navigate to products page
    //     navigate(
    //         `/products?search=${encodeURIComponent(search)}`
    //     );


    //     // Clear search input
    //     setSearchText("");


    //     // Close mobile menu
    //     closeMenu();

    // };

    const handleSearch = (event) => {

    event.preventDefault();

    const search = searchText.trim();

    if (!search) {
        return;
    }

    console.log("Searching product:", search);

    navigate(`/products?search=${encodeURIComponent(search)}`);

    setSearchText("");
    closeMenu();

};


    // =========================================
    // CLEAR SEARCH WHEN LEAVING PRODUCTS
    // =========================================

    const handleLogoClick = () => {

        setSearchText("");

        closeMenu();

    };


    // =========================================
    // RETURN
    // =========================================

    return (

        <header className="header">

            <div className="container">

                <nav
                    className="navbar"
                    aria-label="Main navigation"
                >

                    {/* =================================
                        LOGO
                    ================================= */}

                    <div className="logo">

                        <NavLink
                            to="/"
                            aria-label="JoyBasket Home"
                            onClick={handleLogoClick}
                        >
                            <img src={logo} alt="JoyBasket"   />
                        </NavLink>

                    </div>


                    {/* =================================
                        SEARCH
                    ================================= */}

                    <form
                        className="navbar-search"
                        onSubmit={handleSearch}
                    >

                        <HiOutlineMagnifyingGlass
                            className="search-icon"
                        />

                        <input
                            type="search"
                            placeholder="Search products..."
                            value={searchText}
                            onChange={(event) =>
                                setSearchText(
                                    event.target.value
                                )
                            }
                            aria-label="Search products"
                        />


                        {/* Optional search button */}

                        <button
                            type="submit"
                            className="search-submit"
                            aria-label="Search"
                        >
                            <HiOutlineMagnifyingGlass />
                        </button>

                    </form>


                    {/* =================================
                        ACTIONS
                    ================================= */}

                    <div className="nav-actions">


                        {/* =================================
                            WISHLIST
                        ================================= */}

                        <NavLink
                            to="/wishlist"
                            className="nav-btn nav-count-btn"
                            aria-label="Wishlist"
                            title="Wishlist"
                            onClick={closeMenu}
                        >

                            <HiOutlineHeart />

                            {wishlistItems.length > 0 && (

                                <span className="nav-count">
                                    {wishlistItems.length}
                                </span>

                            )}

                        </NavLink>


                        {/* =================================
                            CART
                        ================================= */}

                        <NavLink
                            to="/cart"
                            className="nav-btn nav-count-btn"
                            aria-label="Shopping cart"
                            title="Cart"
                            onClick={closeMenu}
                        >

                            <HiOutlineShoppingCart />

                            {totalItems > 0 && (

                                <span className="nav-count">
                                    {totalItems}
                                </span>

                            )}

                        </NavLink>


                        {/* =================================
                            ACCOUNT
                        ================================= */}

                        <button
                            type="button"
                            className="nav-btn account-btn"
                            aria-label="Account"
                            title="Account"
                        >

                            <HiOutlineUser />

                        </button>


                        {/* =================================
                            MOBILE MENU
                        ================================= */}

                        <button
                            type="button"
                            className="menu-toggle"
                            aria-label={
                                isMenuOpen
                                    ? "Close navigation menu"
                                    : "Open navigation menu"
                            }
                            aria-expanded={isMenuOpen}
                            onClick={() =>
                                setIsMenuOpen(
                                    (previous) =>
                                        !previous
                                )
                            }
                        >

                            {isMenuOpen ? (
                                <HiOutlineXMark />
                            ) : (
                                <HiOutlineBars3 />
                            )}

                        </button>

                    </div>

                </nav>


                {/* =================================
                    MOBILE MENU
                ================================= */}

                {isMenuOpen && (

                    <div className="mobile-menu">

                        <NavLink
                            to="/"
                            onClick={closeMenu}
                        >
                            Home
                        </NavLink>


                        <NavLink
                            to="/products"
                            onClick={closeMenu}
                        >
                            Products
                        </NavLink>


                        <NavLink
                            to="/about"
                            onClick={closeMenu}
                        >
                            About
                        </NavLink>


                        <NavLink
                            to="/contact"
                            onClick={closeMenu}
                        >
                            Contact
                        </NavLink>

                    </div>

                )}

            </div>

        </header>

    );

};


export default Navbar;
