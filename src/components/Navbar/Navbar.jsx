import "./Navbar.css";

import { NavLink } from "react-router-dom";

import {
    HiOutlineMagnifyingGlass,
    HiOutlineShoppingCart,
    HiOutlineUser,
} from "react-icons/hi2";

const Navbar = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar">

                    <div className="logo">
                        <NavLink to="/">
                            <h2>JoyBasket</h2>
                        </NavLink>
                    </div>

                    <ul className="nav-links">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>

                        <li>
                            <NavLink to="/products">Products</NavLink>
                        </li>

                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>

                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>

                    <div className="nav-actions">

                        <button className="nav-btn">
                            <HiOutlineMagnifyingGlass />
                        </button>

                        <button className="nav-btn">
                            <HiOutlineShoppingCart />
                        </button>

                        <button className="nav-btn">
                            <HiOutlineUser />
                        </button>

                    </div>

                </nav>
            </div>
        </header>
    );
};

export default Navbar;