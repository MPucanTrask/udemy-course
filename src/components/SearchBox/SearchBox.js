import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

// eslint-disable-next-line react/prop-types
function SearchBox({ handleChange }) {
  const disableEnter = (event) => event.key === 'Enter' && event.preventDefault();

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '15rem' },
      }}
      textAlign="center"
      noValidate
      autoComplete="off"
    >
      <TextField
        id="basic-search"
        label="Search monster"
        variant="outlined"
        onChange={handleChange}
        onKeyPress={disableEnter}
      />
    </Box>
  );
}

export default SearchBox;
