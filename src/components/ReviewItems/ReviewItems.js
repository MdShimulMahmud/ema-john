import React from 'react';
import './reviewitem.css';

const ReviewItems = ({ product, removeProduct }) => {
    const { name, seller, price } = product;

    return (
        <div className="review-item">
            <h3>{name}</h3>
            <p>
                <strong>by :{seller}</strong>
            </p>
            <p>
                <small>Quantity: {product.quantity}</small>
            </p>
            <p>
                <small>Price: ${price}</small>
            </p>

            <button type="button" onClick={() => removeProduct(product.key)}>
                Remove
            </button>
        </div>
    );
};

export default ReviewItems;
