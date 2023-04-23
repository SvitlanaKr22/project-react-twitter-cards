import { useState, useEffect } from 'react';
import { fetchUsers } from 'services/fetchUsers';
import { TweetCardList } from 'components/TweetCardList/TweetCardList';
import { Button } from '@mui/material';

export default function Tweets() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);

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
    <div>
      <p>Tweets ???</p>
      <TweetCardList users={users} />
      {users.length !== 0 && (
        <Button onClick={handleLoadMore}>LOAD MORE</Button>
      )}
    </div>
  );
}
