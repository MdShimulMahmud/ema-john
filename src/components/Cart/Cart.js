import React from 'react';
import './cart.css';

const Cart = ({ cart, children }) => {
    const itemPrice = cart.reduce((item, pd) => pd.price * (pd.quantity || 1) + item, 0);

    const shippingCharge = cart.reduce(
        (prevPrice, pd) => pd.shipping * (pd.quantity || 1) + prevPrice,
        0
    );
    const total = itemPrice + shippingCharge;

    const tax = total * 0.1;
    const totalPrice = total + shippingCharge + tax;
    const formatDecimal = (num) => Number(num.toFixed(2));

    return (
        <div className="cart">
            <h2>Order summary</h2>
            <h3>
                <small>Items ordered: {cart.length}</small>
            </h3>
            <p>
                <small>
                    Items Price: <span>${formatDecimal(itemPrice)}</span>
                </small>
            </p>
            <p>
                <small>
                    Shipping & Handling: <span>${formatDecimal(shippingCharge)}</span>
                </small>
            </p>
            <p>
                <small>
                    Total before tax: <span>${formatDecimal(total)}</span>
                </small>
            </p>
            <p>
                <small>
                    Estimated Tax: <span>${formatDecimal(tax)}</span>
                </small>
            </p>
            <p>
                <small>
                    Order Total: <span>${formatDecimal(totalPrice)}</span>
                </small>
            </p>
            {children}
        </div>
    );
};

export default Cart;
