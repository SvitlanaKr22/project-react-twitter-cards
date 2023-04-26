import { Box, Typography } from '@mui/material';
export const HeaderTweetsCards = () => {
  return (
    <Box
      sx={{
        height: ' 100vh',
        backgroundColor: '#d2c8e7',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          height: ' 60vh',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#d2c8e7',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: '#fff',
            fontWeight: '700',
            textTransform: 'uppercase',
          }}
        >
          tweet cards
        </Typography>
      </Box>
    </Box>
  );
};
