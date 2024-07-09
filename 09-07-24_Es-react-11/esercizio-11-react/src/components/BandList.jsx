import React from 'react';

const BandList = ({ bands, deleteBand }) => {
    return (
        <ul>
            {bands.map((band) => (
                <li key={band.id}>
                    <span>{band.name} - {band.genre}</span>
                    <button onClick={() => deleteBand(band.id)}>Elimina</button>
                </li>
            ))}
        </ul>
    );
};

export default BandList;
