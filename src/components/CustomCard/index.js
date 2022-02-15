import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red, yellow } from '@mui/material/colors';
import Grid from '@mui/material/Grid';

const CustomCard = ({ users }) => (
  users.map((user) => (
    <Grid item xs={6} key={user.id}>
      <Card sx={{ bgcolor: yellow[50] }}>
        <CardHeader
          avatar={(
            <Avatar sx={{ bgcolor: red[600] }} aria-label="recipe">
              {user.last_name.charAt(0).toUpperCase()}
            </Avatar>
          )}
          title={`${user.first_name} ${user.last_name}`}
          subheader={user.email}
        />
      </Card>
    </Grid>
  ))
);

export default CustomCard;
