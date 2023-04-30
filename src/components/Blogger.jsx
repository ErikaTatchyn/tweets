import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import GoIT from '../imgs/goit.svg';
import BgImg from '../imgs/bg.png';
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
    <Card
      sx={{
        width: 360,
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
          mt: 3,
        }}
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
          textAlign: 'center',
          alignItems: 'center',
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
        <Button
          variant="contained"
          color={isFollowing ? 'secondary' : 'info'}
          onClick={handleFollow}
          sx={{
            maxWidth: 196,
            boxShadow: '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)',
            borderRadius: '10px',
            mt: 2,
          }}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </Button>
      </CardContent>
    </Card>
  );
}

export default Blogger;
