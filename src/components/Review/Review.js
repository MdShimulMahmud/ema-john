import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import success from '../../images/giphy.gif';
import {
    getDatabaseCart,
    processOrder,
    // eslint-disable-next-line prettier/prettier
    removeFromDatabaseCart
} from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import './review.css';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [placed, setPlaced] = useState(false);

    const removeProduct = (key) => {
        // console.log('removed ', key);
        const newCart = cart.filter((pd) => pd.key !== key);
        setCart(newCart);
        removeFromDatabaseCart(key);
    };

    const handleCheckout = () => {
        setCart([]);
        setPlaced(true);
        processOrder(cart);
    };

    useEffect(() => {
        const saveData = getDatabaseCart();
        const productKeys = Object.keys(saveData);

        const cardProducts = productKeys.map((key) => {
            const product = fakeData.find((pd) => pd.key === key);
            product.quantity = saveData[key];
            return product;
        });
        setCart(cardProducts);
        return () => {};
    }, []);
    let completeOrder;
    if (placed) {
        completeOrder = <img src={success} alt="successful" />;
    }
    return (
        <div className="review-shop">
            <div className="review-container">
                {cart.map((pd) => (
                    <ReviewItems product={pd} key={pd.key} removeProduct={removeProduct} />
                ))}
                {completeOrder}
            </div>
            <div className="review-card">
                <Cart cart={cart}>
                    <Link to="/review">
                        <button type="button" onClick={handleCheckout}>
                            Checkout Order
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Review;
