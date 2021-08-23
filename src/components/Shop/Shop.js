import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css';

const Shop = () => {
    const products = fakeData.slice(0, 10);
    const [cart, setCart] = useState([]);

    // checking the cart is empty or not taken from review cart by database
    useEffect(() => {
        const savedData = getDatabaseCart();
        const productKeys = Object.keys(savedData);
        const previousCart = productKeys.map((pdKey) => {
            const product = fakeData.find((pd) => pd.key === pdKey);
            // product.quantity = savedData[pdKey];
            return product;
        });
        setCart(previousCart);

        return () => {};
    }, []);
    // const showAddToCart;
    // set product to cart
    const addProduct = (singleProduct) => {
        console.log(singleProduct);

        const newCart = [...cart, singleProduct];
        setCart(newCart);
        const sameProduct = newCart.filter((pd) => pd.key === singleProduct.key);
        const count = sameProduct.length;
        addToDatabaseCart(singleProduct.key, count);
    };

    return (
        <div className="shop">
            <div className="container">
                {products.map((singleProduct) => (
                    <Product
                        showAddToCart
                        product={singleProduct}
                        key={singleProduct.key}
                        addProduct={() => addProduct(singleProduct)}
                    />
                ))}
            </div>
            <div className="card">
                <Cart cart={cart}>
                    <Link to="/review">
                        <button type="button"> Review your order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;
