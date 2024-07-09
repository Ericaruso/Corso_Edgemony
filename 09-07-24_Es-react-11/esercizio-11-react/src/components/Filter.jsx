import React from 'react';

const Filter = ({ setFilter }) => {
    return (
        <input
            type="text"
            placeholder="Filtra Gruppi"
            onChange={(e) => setFilter(e.target.value)}
        />
    );
};

export default Filter;
