import { Grid } from '@mui/material';
import { TweetCard } from 'components/TweetCard/TweetCard';
export const TweetCardList = ({ users }) => {
  return (
    <Grid container spacing={3}>
      {users.map(({ id, ...props }) => (
        <Grid item xs={2} sm={4} md={4} key={id}>
          <TweetCard props={props} />
        </Grid>
      ))}
    </Grid>
  );
};
