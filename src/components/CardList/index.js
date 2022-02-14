import React from 'react';
import Grid from '@mui/material/Grid';
import CustomCard from '../CustomCard';

// eslint-disable-next-line react/prop-types
function CardList({ users }) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 3, sm: 8, md: 12 }}
      sx={{ p: '2rem 0' }}
    >
      <CustomCard users={users} />
    </Grid>
  );
}

export default CardList;
