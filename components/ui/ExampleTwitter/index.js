import React from 'react';
import Avatar from 'boring-avatars';
import './styles.css';

const ExampleTwitter = ({ users, colors, variant }) => {
  const firstUser = users[0];
  const usersWithoutFirst = users.slice(1);

  return (
    <div className="card">
      <div className="twitter-wrapper">
        <header>
          <Avatar
            name={firstUser.name}
            colors={colors}
            size="28"
            variant={variant}
          />
          <div>
            <div>
              <h4>{firstUser.name}</h4>
              <p>
                I need a hobby so I think I'm gonna start calling the phone
                numbers on missing cat posters and just "meow" at whoever
                answers
              </p>
            </div>
            <div>
              <small>Reply</small>
              <small>React</small>
            </div>
          </div>
        </header>
        {usersWithoutFirst.map((user, index) => (
          <div key={index}>
            <Avatar
              name={user.name}
              colors={colors}
              size="22"
              variant={variant}
            />
            <small>{user.name}</small>
            <small>{user.comment}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExampleTwitter;
