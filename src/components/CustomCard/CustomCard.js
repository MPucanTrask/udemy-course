import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red, yellow } from '@mui/material/colors';
import Grid from '@mui/material/Grid';

const CustomCard = ({ monsters }) => (
  monsters.map((monster) => (
    <Grid item xs={4} key={monster.id}>
      <Card
        sx={{
          maxWidth: 360,
          minWidth: 200,
          bgcolor: yellow[50],
        }}
      >
        <CardHeader
          avatar={(
            <Avatar sx={{ bgcolor: red[600] }} aria-label="recipe">
              {monster.name.charAt(0).toUpperCase()}
            </Avatar>
          )}
          title={monster.name}
          subheader={monster.username.toLowerCase()}
        />
        <div style={{ textAlign: 'center' }}>
          <img
            src={`https://robohash.org/${monster.id}?set=set?&size=180x180`}
            alt={monster.name}
          />
        </div>
      </Card>
    </Grid>
  ))
);

export default CustomCard;
