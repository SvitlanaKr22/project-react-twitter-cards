import { useState, useEffect, useLocation, useRef } from 'react';
import { fetchUsers } from 'services/fetchUsers';
import { TweetCardList } from 'components/TweetCardList/TweetCardList';
import { Box, Button } from '@mui/material';
import { Filter } from '../components/Filter/Filter';

import { Link } from 'react-router-dom';
export default function Tweets() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  // const location = useLocation();
  // const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const controller = new AbortController();

    fetchUsers(page, controller)
      .then(data => {
        const users = data.map(({ user, avatar, id, followers, tweets }) => ({
          user,
          avatar,
          followers,
          tweets,
          id,
        }));
        setUsers(prevState => {
          console.log('prevState', prevState);
          return [...prevState, ...users];
        });
        //setUsers([...users]);
        // setUsers(prevState => [
        //   ...prevState,
        //   ...data.map(({ user, avatar, id, followers, tweets }) => ({
        //     user,
        //     avatar,
        //     followers,
        //     tweets,
        //     id,
        //   })),
        // ]);
      })
      .catch(error => console.error(error));
    // return () => {
    //   controller.abort();
    // };
  }, [page]);

  const handleLoadMore = () => setPage(prevPage => prevPage + 1);

  return (
    <Box>
      <p>Tweets ???</p>
      <Button>
        {/* <Link to={backLinkHref.current}>Go back</Link> */}
        <Link to="/">Go back</Link>
      </Button>
      <Filter />
      <TweetCardList users={users} />
      {users.length !== 0 && (
        <Button onClick={handleLoadMore}>LOAD MORE</Button>
      )}
    </Box>
  );
}
