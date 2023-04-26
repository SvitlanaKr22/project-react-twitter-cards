import { useState, useEffect, useRef } from 'react';
import { fetchUsers } from 'services/fetchUsers';
import { TweetCardList } from 'components/TweetCardList/TweetCardList';
import { Box, Button } from '@mui/material';
import { Filter } from '../components/Filter/Filter';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';

const LS_USERS = 'users';

export default function Tweets() {
  const isFirstRender = useRef(true);
  const isLSFirstUsers = useRef(false);

  const getFromLocalStorage = () => {
    const stateFromStorage = JSON.parse(localStorage.getItem(LS_USERS));
    if (stateFromStorage === null) return [];
    isLSFirstUsers.current = true;
    return stateFromStorage;
  };

  const [page, setPage] = useState(1);
  const [users, setUsers] = useState(getFromLocalStorage);
  const [filter, setFilter] = useState('all');
  const [cardUsers, setCardUsers] = useState([]);

  const handleFollow = id => {
    const userFollow = users.find(user => user.id === id);
    const upUsers = users.map(user => {
      if (user.id === userFollow.id) {
        user.isFollow = !user.isFollow;
        user.followers = user.isFollow
          ? (user.followers += 1)
          : (user.followers -= 1);
      }
      return user;
    });
    setUsers([...upUsers]);
  };

  const handleChange = event => {
    setFilter(event.target.value);
  };

  const handleLoadMore = () => setPage(prevPage => prevPage + 1);

  const selectCard = () => {
    switch (filter) {
      case 'all':
        setCardUsers([...users]);
        break;
      case 'follow':
        setCardUsers([...users.filter(user => user.isFollow === false)]);
        break;
      case 'following':
        setCardUsers([...users.filter(user => user.isFollow === true)]);
        break;
      default:
        return;
    }
  };
  // const location = useLocation();
  // const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    localStorage.setItem(LS_USERS, JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (isFirstRender.current && isLSFirstUsers.current) {
      isFirstRender.current = false;
      return;
    }

    const controller = new AbortController();

    fetchUsers(page, controller)
      .then(data => {
        const users = data.map(({ user, avatar, id, followers, tweets }) => ({
          user,
          avatar,
          followers,
          tweets,
          id: nanoid(),
          isFollow: false,
        }));
        setUsers(prevState => {
          return [...prevState, ...users];
        });
      })
      .catch(error => console.error(error));
    return () => {
      controller.abort();
    };
  }, [page]);

  useEffect(selectCard, [filter, users]);

  return (
    <Box
      sx={{
        backgroundColor: '#d2c8e7',
      }}
    >
      <Button>
        {/* <Link to={backLinkHref.current}>Go back</Link> */}
        <NavLink
          style={{
            textDecoration: 'none',
            color: 'var(--mui-palette-primary-light)',
          }}
          to="/"
        >
          Go back
        </NavLink>
      </Button>
      <Filter handleChange={handleChange} filter={filter} />
      <TweetCardList users={cardUsers} handleFollow={handleFollow} />
      {cardUsers.length !== 0 && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            variant="contained"
            sx={{
              marginTop: '30px',
              marginBottom: '30px',
            }}
            onClick={handleLoadMore}
          >
            LOAD MORE
          </Button>
        </Box>
      )}
    </Box>
  );
}
