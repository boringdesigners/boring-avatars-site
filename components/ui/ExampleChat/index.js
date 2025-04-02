import React from 'react';
import Avatar from 'boring-avatars';
import './styles.css';

const ExampleChat = ({ users, colors, variant }) => {
  return (
    <div className="card">
      <div className="chat-avatar-wrapper">
        <h3>Chat</h3>
        {users.map((user, index) => (
          <div key={index}>
            <header>
              <Avatar
                name={user.name}
                colors={colors}
                size="32"
                variant={variant}
              />
            </header>
            <div>
              <h4>{user.name}</h4>
              <small>{user.email}</small>
              {user.status && (
                <span
                  className={`chat-badge chat-badge--${user.status ? 'active' : 'inactive'}`}
                >
                  Active
                </span>
              )}
            </div>
            <small>{user.time}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExampleChat;
