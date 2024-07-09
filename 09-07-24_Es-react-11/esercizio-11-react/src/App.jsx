import React, { useState } from 'react';
import AddBandForm from './components/AddBandForm';
import BandList from './components/BandList';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  const [bands, setBands] = useState([]);
  const [filter, setFilter] = useState('');

  const addBand = (name, genre) => {
    setBands([...bands, { id: Date.now(), name, genre }]);
  };

  const deleteBand = (id) => {
    setBands(bands.filter(band => band.id !== id));
  };

  const filteredBands = bands.filter(band => band.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h1>Catalogo di Gruppi Rock Classici</h1>
      <AddBandForm addBand={addBand} />
      <Filter setFilter={setFilter} />
      <BandList bands={filteredBands} deleteBand={deleteBand} />
    </div>
  );
};

export default App;
