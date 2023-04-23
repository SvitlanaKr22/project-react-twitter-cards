import { Box, Button } from '@mui/material';
export const TweetCard = ({ props: { user, avatar, followers, tweets } }) => {
  return (
    <Box
      sx={{
        width: '380px',
        height: '460px',
        backgroundColor: 'rgba(87, 54, 163, 1)',
      }}
    >
      <Button>Follow</Button>
    </Box>
  );
};
