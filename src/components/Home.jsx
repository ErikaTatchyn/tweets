import React from 'react';

import { Link } from 'react-router-dom';

import { Button, Container, Typography } from '@mui/material';

function Home() {
  return (
    <Container sx={{ textAlign: 'center' }}>
      <Typography variant="h4" sx={{ my: 10 }}>
        Welcome to our App!
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/tweets">
        See Tweets
      </Button>
    </Container>
  );
}

export default Home;
