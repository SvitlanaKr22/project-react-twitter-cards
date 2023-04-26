import { Box, Button, Typography, Avatar } from '@mui/material';
import { ReactComponent as Logo } from './Logo.svg';

import picture from './picture21.png';

export const TweetCard = ({
  props: { user, avatar, followers, tweets, isFollow },
  handleFollow,
  id,
}) => {
  const bgColor = isFollow ? '#5CD3A8' : '#EBD8FF';
  const nameButton = isFollow ? 'Following' : 'Follow';
  const followersUI =
    String(followers).length > 3
      ? String(followers).slice(0, 3) +
        ',' +
        String(followers).slice(3, String(followers).length)
      : String(followers);

  return (
    <Box
      sx={{
        position: 'relative',
        paddingBottom: '36px',
        paddingTop: '28px',
        width: '380px',
        height: '460px',
        backgroundColor: 'rgba(87, 54, 163, 1)',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{ position: 'absolute', left: '15px', top: '20px', zIndex: '200' }}
      >
        <Logo />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          left: '-1px',
          top: '214px',
          width: '380px',
          height: '8px',
          backgroundColor: '#EBD8FF',
          border: '1px solid #000000',
          boxShadow:
            '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF',
        }}
      ></Box>
      <Box
        sx={{
          position: 'absolute',
          left: '150px',
          top: '174px',
          zIndex: '100',
          borderRadius: '50%',
          borderWidth: '8px',
          borderColor: '#EBD8FF',
          borderStyle: 'solid',
          boxShadow:
            ' 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;',
        }}
      >
        <Avatar
          variant="circular"
          alt={user}
          src={avatar}
          sx={{
            width: 80,
            height: 80,
          }}
        />
      </Box>

      <Box
        sx={{
          width: '308px',
          height: '168px',
          backgroundImage: `url(${picture})`,
          backgroundSize: 'cover',
        }}
      ></Box>
      <Box
        sx={{
          textTransform: 'uppercase',

          lineHeight: '1.2',
          color: '#EBD8FF',
          textAlign: 'center',
        }}
      >
        <Typography sx={{ marginBottom: '16px', fontSize: '20px' }}>
          {tweets}&nbsp;tweets
        </Typography>
        <Typography sx={{ marginBottom: '26px', fontSize: '20px' }}>
          {followersUI}
          &nbsp;followers
        </Typography>
        <Button
          variant="contained"
          sx={{
            color: 'rgba(55, 55, 55, 1)',
            fontSize: '18px',
            backgroundColor: `${bgColor}`,
            width: '196px',
            borderRadius: '10px',
          }}
          onClick={() => handleFollow(id)}
        >
          {nameButton}
        </Button>
      </Box>
    </Box>
  );
};
