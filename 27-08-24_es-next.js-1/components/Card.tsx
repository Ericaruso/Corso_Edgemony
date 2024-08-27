import React from 'react';


interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
    return (
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', maxWidth: '300px' }}>
            <img src={imageUrl} alt={title} style={{ width: '100%', borderRadius: '8px' }} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Card;
