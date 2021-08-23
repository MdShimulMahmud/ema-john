import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './product.css';

const Product = ({ product, addProduct, showAddToCart }) => {
    const { name, stock, price, img, seller, key } = product;

    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt="img" />
            </div>
            <div className="product-details">
                <div>
                    <Link to={`/product/${key}`}>
                        <h3>{name}</h3>
                    </Link>
                </div>
                <div className="details">
                    <div>
                        <p>
                            <strong>by: {seller}</strong>
                        </p>
                        <br />
                        <p>Price: ${price}</p>
                        <p>
                            <small>only {stock} left in stock - order soon</small>
                        </p>
                        {showAddToCart ? (
                            <button type="button" onClick={addProduct}>
                                <FontAwesomeIcon icon={faShoppingCart} />
                                add to cart
                            </button>
                        ) : (
                            ''
                        )}
                    </div>

                    <div>
                        <Rating
                            style={{ color: 'goldenrod' }}
                            start={0}
                            stop={5}
                            step={1}
                            placeholderRating={product.star}
                            emptySymbol={
                                <FontAwesomeIcon style={{ color: 'yellow' }} icon={faStar} />
                            }
                            placeholderSymbol={<FontAwesomeIcon icon={faStar} />}
                            fullSymbol={<FontAwesomeIcon icon={faStar} />}
                            readonly
                        />
                        <h4>Features :</h4>
                        <ul>
                            {product.features.map((ftr) => (
                                <li key={ftr.description}>
                                    {ftr.description}: <strong>{ftr.value}</strong>{' '}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
