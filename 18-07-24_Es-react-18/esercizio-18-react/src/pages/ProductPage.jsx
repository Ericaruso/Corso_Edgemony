import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data));
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="p-4">
            <img src={product.images[0]} alt={product.title} className="w-full h-64 object-cover mb-4" />
            <h1 className="text-2xl mb-4">{product.title}</h1>
            <p className="text-gray-700 mb-4">{product.price} €</p>
            <p className="text-gray-700 mb-4">{product.description}</p>
        </div>
    );
};

export default ProductPage;
