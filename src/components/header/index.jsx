/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import './styles.css';
import { CartContext } from "../../context/cart-context";
import { useNavigate, Link } from "react-router-dom";

const Header = ({ logo }) => {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCart = () => {
        navigate('/cart');
    }
    return (
        <header className="header">
            <Link to='/' className="logo">{logo}</Link>
            <input type="checkbox" className="side-menu" id="side-menu" />
            <label className="hamb" htmlFor ="side-menu">
                <span className="hamb-line"></span>
            </label>
            <nav className="nav">
                <ul className="menu">
                    <li onClick={goToCart} className="menu-cart-container">
                        <img className="menu-cart-image" src="https://cdn-icons-png.flaticon.com/512/665/665199.png" alt="cart" />
                        <div className="menu-cart-count-container">
                            <span className="menu-cart-count">{cart.length}</span>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;