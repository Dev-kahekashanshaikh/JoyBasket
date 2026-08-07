import "./Footer.css";

import { NavLink } from "react-router-dom";

import {
    HiOutlineEnvelope,
    HiOutlinePhone,
    HiOutlineMapPin,
} from "react-icons/hi2";

const Footer = () => {
    return (
        <footer className="footer">

            <div className="container">

                <div className="footer-main">

                    {/* Brand */}
                    <div className="footer-brand">

                        <NavLink to="/" className="footer-logo">
                            JoyBasket
                        </NavLink>

                        <p className="footer-description">
                            Your one-stop destination for fashion, groceries,
                            electronics, beauty, home essentials and more.
                            Shop smarter, shop happier with JoyBasket.
                        </p>

                        <div className="footer-contact">

                            <div className="footer-contact-item">
                                <HiOutlineMapPin />
                                <span>India</span>
                            </div>

                            <div className="footer-contact-item">
                                <HiOutlinePhone />
                                <span>+91 98765 43210</span>
                            </div>

                            <div className="footer-contact-item">
                                <HiOutlineEnvelope />
                                <span>support@joybasket.com</span>
                            </div>

                        </div>

                    </div>


                    {/* Quick Links */}
                    <div className="footer-column">

                        <h3>Quick Links</h3>

                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>

                            <li>
                                <NavLink to="/products">Products</NavLink>
                            </li>

                            <li>
                                <NavLink to="/about">About Us</NavLink>
                            </li>

                            <li>
                                <NavLink to="/contact">Contact Us</NavLink>
                            </li>
                        </ul>

                    </div>


                    {/* Customer */}
                    <div className="footer-column">

                        <h3>Customer Care</h3>

                        <ul>
                            <li>
                                <NavLink to="/cart">Shopping Cart</NavLink>
                            </li>

                            <li>
                                <NavLink to="/wishlist">Wishlist</NavLink>
                            </li>

                            <li>
                                <a href="#">Shipping & Delivery</a>
                            </li>

                            <li>
                                <a href="#">Returns & Refunds</a>
                            </li>

                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                        </ul>

                    </div>


                    {/* Categories */}
                    <div className="footer-column">

                        <h3>Categories</h3>

                        <ul>
                            <li>
                                <a href="#">Fashion</a>
                            </li>

                            <li>
                                <a href="#">Electronics</a>
                            </li>

                            <li>
                                <a href="#">Groceries</a>
                            </li>

                            <li>
                                <a href="#">Beauty</a>
                            </li>

                            <li>
                                <a href="#">Home & Living</a>
                            </li>
                        </ul>

                    </div>

                </div>


                {/* Footer Bottom */}

                <div className="footer-bottom">

                    <p>
                        © {new Date().getFullYear()} JoyBasket. All rights reserved.
                    </p>

                    <div className="footer-bottom-links">

                        <NavLink to="/about">
                            About
                        </NavLink>

                        <NavLink to="/contact">
                            Contact
                        </NavLink>

                        <a href="#">
                            Terms & Conditions
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;