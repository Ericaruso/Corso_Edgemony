import React, { useEffect, useState } from 'react';

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(cartItems);
    }, []);

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(product => product.id !== productId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl mb-4">Carrello</h1>
            <div>
                {cart.map(product => (
                    <div key={product.id} className="border p-4 rounded shadow mb-4">
                        <img src={product.images[0]} alt={product.title} className="w-20 h-20 object-cover mb-4" />
                        <h2 className="text-xl">{product.title}</h2>
                        <p className="text-gray-700">{product.price} €</p>
                        <button
                            className="mt-2 bg-red-500 text-white py-1 px-4 rounded"
                            onClick={() => removeFromCart(product.id)}>
                            Rimuovi
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
