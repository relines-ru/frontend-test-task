import { User } from './types';

export const UserCard = ({ username }: User): JSX.Element => (
  <div>
    {username}
  </div>
);
