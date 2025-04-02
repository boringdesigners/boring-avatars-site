import React from 'react';
import Avatar from 'boring-avatars';
import './styles.css';

const ExampleShared = ({ users, colors, variant }) => {
  return (
    <div className="card">
      <div className="shared-avatar-wrapper">
        <h3>Share</h3>
        {users.map((user, index) => (
          <div key={index} className="shared-avatar">
            <Avatar
              size={42}
              name={user.name}
              variant={variant}
              colors={colors}
            />
            <h4>{user.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExampleShared;
