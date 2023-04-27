import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Container,
  Grid,
  Select,
  MenuItem,
  Typography,
  Button,
} from '@mui/material';
import Blogger from './Blogger';

function Tweets() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('all');

  async function getUsers(page) {
    try {
      const response = await axios.get(
        `https://641b54ed1f5d999a4461467e.mockapi.io/users?page=${page}&limit=3`
      );
      if (page === 1) {
        setUsers(response.data);
      } else {
        setUsers(prevUsers => [...new Set([...prevUsers, ...response.data])]);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    setLoading(true);
    getUsers(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const filteredUsers =
    filter === 'all'
      ? users
      : filter === 'following'
      ? users.filter(
          user => localStorage.getItem(`followButton-${user.id}`) === 'true'
        )
      : users.filter(
          user => localStorage.getItem(`followButton-${user.id}`) !== 'true'
        );

  return (
    <Container fixed>
      <Box sx={{ my: 2 }}>
        <Select
          value={filter}
          onChange={event => setFilter(event.target.value)}
          sx={{ mr: 2 }}
        >
          <MenuItem value="all">Show all</MenuItem>
          <MenuItem value="follow">Follow</MenuItem>
          <MenuItem value="following">Following</MenuItem>
        </Select>
      </Box>
      <Grid container spacing={4}>
        {filteredUsers.map(user => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Blogger user={user} />
          </Grid>
        ))}
      </Grid>
      {loading && <Typography>Loading...</Typography>}
      {!loading && (
        <Box mt={2}>
          <Grid container justifyContent="center">
            <Grid item>
              <Box textAlign="center">
                <Button onClick={handleLoadMore}>Load More</Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
}

export default Tweets;
