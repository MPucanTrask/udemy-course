import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';

import Container from '@mui/material/Container';

import { getFetchedResponse } from './services/UserService';
import { containerStyle } from './externalStyle';

// eslint-disable-next-line import/no-cycle
import Header from './components/Header';
import CardList from './components/CardList';

export const UserContext = createContext({
  users: '',
  setUsers: () => {},
});

function App() {
  const [users, setUsers] = useState([]);
  const value = useMemo(
    () => ({ users, setUsers }),
    [users],
  );

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
    <UserContext.Provider value={value}>
      <Container maxWidth="md" sx={containerStyle}>
        <Header onChange={handleFilterChange} />
        <CardList users={filterUsersByName} />
      </Container>
    </UserContext.Provider>
  );
}

export default App;
