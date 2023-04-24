import { useState, useEffect } from 'react';
import { fetchUsers } from 'services/fetchUsers';
import { TweetCardList } from 'components/TweetCardList/TweetCardList';
import { Box, Button } from '@mui/material';
import { Filter } from '../components/Filter/Filter';

import { Link } from 'react-router-dom';
export default function Tweets() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);

  const handleFollow = id => {
    const userFollow = users.find(user => user.id === id);
    const upUsers = users.map(user => {
      if (user.id === userFollow.id) user.isFollow = !user.isFollow;
      return user;
    });
    setUsers([...upUsers]);
  };

  // const location = useLocation();
  // const backLinkHref = useRef(location.state?.from ?? '/');
  // const isFirstRender = useRef(true);

  useEffect(() => {
    // if (isFirstRender.current) {
    //   isFirstRender.current = false;
    //   return;
    // }
    const controller = new AbortController();

    fetchUsers(page, controller)
      .then(data => {
        const users = data.map(({ user, avatar, id, followers, tweets }) => ({
          user,
          avatar,
          followers,
          tweets,
          id,
          isFollow: false,
        }));
        setUsers(prevState => {
          console.log('prevState', prevState);
          return [...prevState, ...users];
        });
      })
      .catch(error => console.error(error));
    return () => {
      controller.abort();
    };
  }, [page]);

  const handleLoadMore = () => setPage(prevPage => prevPage + 1);

  return (
    <Box>
      <Button>
        {/* <Link to={backLinkHref.current}>Go back</Link> */}
        <Link to="/">Go back</Link>
      </Button>
      <Filter />
      <TweetCardList users={users} handleFollow={handleFollow} />
      {users.length !== 0 && (
        <Button onClick={handleLoadMore}>LOAD MORE</Button>
      )}
    </Box>
  );
}
