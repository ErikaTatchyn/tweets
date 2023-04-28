import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { theme } from 'theme';
import { ReactComponent as GoIT } from '../imgs/goit.jpg';
import BgImg from '../imgs/bg.jpg';

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
        maxWidth: 380,
        height: 460,
        m: 0,
        p: 4,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: '20px',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
      }}
    >
      <CardMedia
        sx={{
          borderBottom: '5px white',
          backgroundImage: `url(${BgImg})`,
          height: 100,
          width: 100,
        }}
        // src="../imgs/bg.jpg"
        title="chat"
        component="div"
        height="194"
      />
      {/* <GoIT /> */}
      <CardContent>
        <Avatar
          src={user.avatar}
          alt={user.user}
          sx={{
            // boxShadow: 'inset 0px 4.39163px 3.29372px #FBF8FF',
            border: '5px solid white',
          }}
        />
        <Typography variant="h6">{user.user}</Typography>
        <Typography variant="body1">Tweets: {user.followers}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color={isFollowing ? 'secondary' : 'warning'}
          onClick={handleFollow}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </Button>
        <Typography variant="body2" color="white">
          {followers.toLocaleString()} followers
        </Typography>
      </CardActions>
    </Card>
  );
}

export default Blogger;
