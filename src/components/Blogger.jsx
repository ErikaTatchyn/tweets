import React, { useEffect, useState } from 'react';
import { Avatar, Box, Button, Typography } from '@mui/material';
import { theme } from 'theme';

function Blogger({ user, following }) {
  const [isFollowing, setIsFollowing] = useState(
    localStorage.getItem(`followButton-${user.id}`) === 'true' || following
  );
  const [followers, setFollowers] = useState(100500);

  useEffect(() => {
    localStorage.setItem(`followButton-${user.id}`, isFollowing);
  }, [isFollowing, user.id]);

  const handleFollow = () => {
    setIsFollowing(prevIsFollowing => !prevIsFollowing);
    setFollowers(prevFollowers =>
      isFollowing ? prevFollowers - 1 : prevFollowers + 1
    );
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        maxWidth: 320,
        p: 4,
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: '20px',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
      }}
    >
      <Avatar src={user.avatar} alt={user.user} />
      <Typography variant="h6">{user.user}</Typography>
      <Typography variant="body1">Tweets: {user.followers}</Typography>
      <Button
        variant="contained"
        color={isFollowing ? 'success' : 'warning'}
        onClick={handleFollow}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </Button>
      <Typography variant="body2" color="white">
        {followers.toLocaleString()} followers
      </Typography>
    </Box>
  );
}

export default Blogger;
