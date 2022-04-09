import React, { useEffect, useState } from 'react';

import { request } from '../../API';

import { UserCard } from '../components/UserCard';
import { User } from '../components/UserCard/types';


export const Home = (): JSX.Element => {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    request.get('/users/random_user?size=3')
      .then(resp => {
        const { data } = resp;

        setUsers(data);
      })
      .catch(error => {
        console.error(error);
      });

  }, []);
  return (
    <div>
      {!!users && users.map(item => (
        <UserCard key={item.uid} {...item} />
      ))}
    </div>
  );
};
