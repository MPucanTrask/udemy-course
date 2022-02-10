import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { grey } from '@mui/material/colors';
import Header from './components/Header/Header';
import CardList from './components/CardList/CardList';
import { getFetchedData } from './services/UserService/UserService';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  const handleFilterChange = (event) => setSearchField(event.target.value);
  const filteredMonsters = monsters.filter((monster) => (
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  ));

  function getAllMonsters() {
    getFetchedData()
      .then((users) => setMonsters(users));
  }

  useEffect(() => {
    getAllMonsters();
  }, []);

  const containerStyle = {
    minHeight: '100vh',
    borderLeft: 1,
    borderRight: 1,
    borderColor: grey[300],
  };

  return (
    <Container maxWidth="md" sx={containerStyle}>
      <Header handleFilterChange={handleFilterChange} />
      <CardList monsters={filteredMonsters} />
    </Container>
  );
}

export default App;
