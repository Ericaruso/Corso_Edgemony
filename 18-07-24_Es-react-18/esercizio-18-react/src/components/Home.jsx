import React, { useEffect, useState } from 'react';
import ProductModal from './ProductModal';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    const addToCart = (product) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl mb-4">Home</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map(product => (
                    <div key={product.id} className="border p-4 rounded shadow">
                        <img src={product.images[0]} alt={product.title} className="w-full h-40 object-cover mb-4" />
                        <h2 className="text-xl">{product.title}</h2>
                        <p className="text-gray-700">{product.price} €</p>
                        <button
                            className="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
                            onClick={() => addToCart(product)}>
                            Aggiungi al Carrello
                        </button>
                        <button
                            className="mt-2 bg-green-500 text-white py-1 px-4 rounded"
                            onClick={() => setSelectedProduct(product)}>
                            Dettagli
                        </button>
                    </div>
                ))}
            </div>
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </div>
    );
};

export default Home;
