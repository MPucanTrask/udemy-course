import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { Pagination } from '@mui/material';
import Box from '@mui/material/Box';
import CardList from './components/CardList';
import { getFetchedResponse } from './services/UserService';
import { containerStyle } from './externalStyle';
import Header from './components/Header';

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
      <Box display="flex" justifyContent="flex-end">
        {filterUsersByName.length > 10 && <Pagination count={10} shape="rounded" />}
      </Box>
    </Container>
  );
}

export default App;
