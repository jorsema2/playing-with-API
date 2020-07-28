import React from 'react';

const User = ({ user }) => (
    <div>
      <p>Nickname: {user.login}</p>
      <img src={user.avatar_url} alt={`Avatar of the ${user.login}`}></img>
      <p>Public repos: {user.public_repos}</p>
      <p>Followers: {user.followers}</p>
    </div>
);

export default User;