import React from 'react';
import Winner from '../Winner';
import comparator from '../../utils/comparator';

// Shows different messages depending on the result of comparisons among both users:
function UserComparator(props) {
  const [firstUser, secondUser] = props.users;
  const reposWinner = comparator(firstUser.public_repos, secondUser.public_repos)
      ? firstUser.login
      : secondUser.login;
  const followersWinner = comparator(firstUser.followers, secondUser.followers)
      ? firstUser.login
      : secondUser.login;
  return (
    <div>
      <Winner type={"repos"} user={reposWinner} />
      <Winner type={"followers"} user={followersWinner} />
    </div>
  );
}

export default UserComparator