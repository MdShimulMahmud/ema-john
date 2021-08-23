import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './header.css';

export default function Header() {
    return (
        <div>
            <div className="header">
                <img src={logo} alt="logo" />
            </div>
            <div className="navbar">
                <nav>
                    <Link to="/shop">Shop</Link>
                    <Link to="/review">Review</Link>
                    <Link to="/manage">Manage shop</Link>
                </nav>
            </div>
        </div>
    );
}
