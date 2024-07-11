import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = () => {
    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="product-info">
            <h2>Sneaker Company</h2>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <div className="price">
                <span className="current-price">$125.00</span>
                <span className="discount">50%</span>
                <span className="original-price">$250.00</span>
            </div>
            <div className="add-to-cart-section">
                <div className="quantity-controls">
                    <button onClick={decreaseQuantity}>-</button>
                    <input type="number" value={quantity} readOnly />
                    <button onClick={increaseQuantity}>+</button>
                </div>
                <button className="add-to-cart-button">
                    <span className="icon-cart"></span>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
