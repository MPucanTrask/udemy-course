import React, { useEffect, useState } from 'react';

import Container from '@mui/material/Container';

import { getFetchedResponse } from './services/UserService';
import { containerStyle } from './externalStyle';

import Header from './components/Header';
import CardList from './components/CardList';

function App() {
  const [users, setUsers] = useState([]);
  const [searchField, setSearchField] = useState('');

  const handleFilterChange = (event) => setSearchField(event.target.value);
  const filterUsersByName = users.filter((user) => (
    user.first_name.toLowerCase().includes(searchField.toLowerCase())
  ));

  const getAllUsers = () => getFetchedResponse().then(({ data }) => setUsers(data));

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <Container maxWidth="md" sx={containerStyle}>
      <Header onChange={handleFilterChange} />
      <CardList users={filterUsersByName} />
    </Container>
  );
}

export default App;
