import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const { productKey } = useParams();
    const product = fakeData.find((pd) => pd.key === productKey);
    // const { name, seller, price, img } = product;
    console.log(product);

    return (
        <div>
            <p>I am Product details!</p>
            <Product product={product} showAddToCart={false} />
        </div>
    );
};

export default ProductDetail;
