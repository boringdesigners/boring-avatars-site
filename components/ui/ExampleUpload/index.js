import React from 'react';
import Avatar from 'boring-avatars';
import { Button } from '@/components/ui/Button';
import './styles.css';

const ExampleUpload = ({ name, likes, colors, variant, img }) => {
  return (
    <div className="card">
      <div className="upload-avatar-wrapper">
        <header>
          <div>
            <Avatar name={name} size="36" variant={variant} colors={colors} />
            <p>
              <b>{name}</b> uploaded a new photo
              <span>2 hours ago</span>
            </p>
          </div>
          <img alt="placeholder" src={img} />
        </header>
        <div className="upload-avatar-group">
          {likes.map((likeName, index) => (
            <Avatar
              key={index}
              name={likeName}
              size="24"
              variant={variant}
              colors={colors}
            />
          ))}
          <span>5 friends liked this</span>
        </div>
        <footer>
          <Button>&#9825; Like</Button>
          <Button>Comment</Button>
        </footer>
      </div>
    </div>
  );
};

export default ExampleUpload;
