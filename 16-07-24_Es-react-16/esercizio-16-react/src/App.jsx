import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [toy, setToy] = useState(null);
  const [localToy, setLocalToy] = useState(() => {
    const savedToy = localStorage.getItem('localToy');
    return savedToy ? JSON.parse(savedToy) : null;
  });

  useEffect(() => {
    console.log('Component mounted: fetch toy');
    fetchToy();
  }, []);

  useEffect(() => {
    if (toy) {
      console.log('Updating localStorage with fetched toy');
      localStorage.setItem('localToy', JSON.stringify(toy));
    }
  }, [toy]);

  const fetchToy = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const result = await response.json();
      console.log('Fetched toy:', result);
      setToy(result);
    } catch (error) {
      console.error('Error fetching toy:', error);
    }
  };

  return (
    <div className="container">
      <h1>Toy Store</h1>
      <p>Fetched Toy: {toy ? JSON.stringify(toy) : 'No toy fetched yet'}</p>
      <p>LocalStorage Toy: {localToy ? JSON.stringify(localToy) : 'No toy in LocalStorage'}</p>
    </div>
  );
};

export default App;
