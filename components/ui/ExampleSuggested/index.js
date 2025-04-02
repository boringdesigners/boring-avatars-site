import React from 'react';
import { Button } from '@/components/ui/Button';
import Avatar from 'boring-avatars';
import './styles.css';

const ExampleSuggested = ({ users, colors, variant }) => {
  return (
    <div className="card">
      <div className="suggested-avatar-wrapper">
        <h3>Mutual followers</h3>
        {users.map((user, index) => (
          <div key={index} className="suggested-avatar">
            <Avatar
              name={user.name}
              colors={colors}
              size="48"
              variant={variant}
            />
            <h4>{user.name}</h4>
            <Button>Follow</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExampleSuggested;
