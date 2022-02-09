import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { grey } from '@mui/material/colors';
import SearchBox from './components/SearchBox/SearchBox';
import CardList from './components/CardList/CardList';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [isFetching, setFetching] = useState(true);

  const handleChange = (event) => setSearchField(event.target.value);
  const filteredMonsters = monsters.filter((monster) => (
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  ));

  const fetchData = () => fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
      setFetching(false);
      setMonsters(users);
    })
    // eslint-disable-next-line no-console
    .catch((e) => console.error(e));

  useEffect(() => {
    fetchData();
  }, []);

  // eslint-disable-next-line no-console
  console.log(isFetching);

  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: '100vh',
        borderLeft: 1,
        borderRight: 1,
        borderColor: grey[300],
      }}
    >
      <SearchBox placeholder="Search monsters.." handleChange={handleChange} />
      <CardList isFetching={isFetching} monsters={filteredMonsters} />
    </Container>
  );
}

export default App;
