import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { theme } from 'theme';
import GoIT from '../imgs/goit.svg';
import BgImg from '../imgs/bg.png';

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
    <Card
      sx={{
        width: 380,
        height: 460,
        m: 0,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        borderRadius: '20px',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        position: 'relative',
      }}
    >
      <CardMedia
        sx={{
          backgroundImage: `url(${BgImg})`,
          height: 160,
          width: 300,
        }}
        // src="../imgs/bg.jpg"
        title="chat"
        component="div"
        height="194"
      />
      <Box
        sx={{
          position: 'absolute',
          backgroundImage: `url(${GoIT})`,
          height: 22,
          width: 76,
          top: 20,
          left: 20,
        }}
      />
      <CardContent
        sx={{
          borderTop: '5px solid white',
          pt: 7,
          mb: 0,
          textAlign: 'center',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        <Avatar
          src={user.avatar}
          alt={user.user}
          sx={{
            position: 'absolute',
            width: 80,
            height: 80,
            border: '5px solid white',
            top: 0,
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <Typography variant="button">{user.followers} Tweets</Typography>{' '}
        <Typography variant="button" color="white">
          {followers.toLocaleString()} followers
        </Typography>
      </CardContent>
      <CardActions sx={{ flexDirection: 'column' }}>
        <Button
          variant="contained"
          color={isFollowing ? 'secondary' : 'info'}
          onClick={handleFollow}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </Button>
      </CardActions>
    </Card>
  );
}

export default Blogger;
