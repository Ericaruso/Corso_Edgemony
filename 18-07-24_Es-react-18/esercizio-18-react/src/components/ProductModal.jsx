import React from 'react';
import { Link } from 'react-router-dom';

const ProductModal = ({ product, onClose }) => {
    if (!product) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded shadow-lg w-1/2">
                <button className="float-right text-gray-700" onClick={onClose}>×</button>
                <img src={product.images[0]} alt={product.title} className="w-full h-64 object-cover mb-4" />
                <h2 className="text-2xl mb-4">{product.title}</h2>
                <p className="text-gray-700 mb-4">{product.price} €</p>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <Link to={`/product/${product.id}`} className="bg-blue-500 text-white py-2 px-4 rounded">
                    Vai alla pagina del prodotto
                </Link>
            </div>
        </div>
    );
};

export default ProductModal;
