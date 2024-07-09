import React, { useState } from 'react';

const AddBandForm = ({ addBand }) => {
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && genre) {
            addBand(name, genre);
            setName('');
            setGenre('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nome del Gruppo"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Genere"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
            />
            <button type="submit">Aggiungi Gruppo</button>
        </form>
    );
};

export default AddBandForm;
