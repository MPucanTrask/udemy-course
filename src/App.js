import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import SearchBox from './components/SearchBox/SearchBox';
import CardList from './components/CardList/CardList';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  const handleChange = (event) => setSearchField(event.target.value);
  const filteredMonsters = monsters.filter((monster) => (
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  ));

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  return (
    <Container maxWidth="md">
      <SearchBox monsters={filteredMonsters} placeholder="Search monsters.." handleChange={handleChange} />
      <CardList monsters={filteredMonsters} />
    </Container>
  );
}

export default App;
