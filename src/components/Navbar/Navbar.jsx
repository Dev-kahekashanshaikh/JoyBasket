import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
    HiOutlineMagnifyingGlass,
    HiOutlineShoppingCart,
    HiOutlineUser,
    HiOutlineHeart,
    HiOutlineBars3,
    HiOutlineXMark,
} from "react-icons/hi2";

import "./Navbar.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="container">

                <nav className="navbar" aria-label="Main navigation">

                    {/* Logo */}
                    <div className="logo">
                        <NavLink
                            to="/"
                            aria-label="JoyBasket Home"
                            onClick={closeMenu}
                        >
                            JoyBasket
                        </NavLink>
                    </div>

                    {/* Navigation */}
                    <ul
                        className={`nav-links ${
                            isMenuOpen ? "nav-links-open" : ""
                        }`}
                    >
                        <li>
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    isActive
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                onClick={closeMenu}
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/products"
                                className={({ isActive }) =>
                                    isActive
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                onClick={closeMenu}
                            >
                                Products
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                onClick={closeMenu}
                            >
                                About
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                onClick={closeMenu}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>

                    {/* Actions */}
                    <div className="nav-actions">

                        <button
                            type="button"
                            className="nav-btn search-btn"
                            aria-label="Search products"
                            title="Search"
                        >
                            <HiOutlineMagnifyingGlass />
                        </button>

                        <NavLink
                            to="/wishlist"
                            className="nav-btn"
                            aria-label="Wishlist"
                            title="Wishlist"
                            onClick={closeMenu}
                        >
                            <HiOutlineHeart />
                        </NavLink>

                        <NavLink
                            to="/cart"
                            className="nav-btn"
                            aria-label="Shopping cart"
                            title="Cart"
                            onClick={closeMenu}
                        >
                            <HiOutlineShoppingCart />
                        </NavLink>

                        <button
                            type="button"
                            className="nav-btn account-btn"
                            aria-label="Account"
                            title="Account"
                        >
                            <HiOutlineUser />
                        </button>

                        {/* Mobile Menu Button */}
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
                                setIsMenuOpen((prev) => !prev)
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

            </div>
        </header>
    );
};

export default Navbar;