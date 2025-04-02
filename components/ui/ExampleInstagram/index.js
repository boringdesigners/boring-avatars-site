import React from 'react';
import { Button } from '@/components/ui/Button';
import Avatar from 'boring-avatars';
import './styles.css';

const ExampleInstagram = ({ name, colors, variant, img }) => {
  return (
    <div className="card">
      <div className="instagram-avatar-wrapper">
        <header>
          <Avatar name={name} size="54" variant={variant} colors={colors} />
          <div>
            <div className="instagram-data">
              <div>
                <span>143</span>
                <span>Posts</span>
              </div>
              <div>
                <span>1.2M</span>
                <span>Followers</span>
              </div>
              <div>
                <span>452</span>
                <span>Following</span>
              </div>
            </div>
          </div>
        </header>
        <h3>{name}</h3>
        <small>Designer | Frontend developer</small>
        <Button>Follow</Button>
      </div>
    </div>
  );
};

export default ExampleInstagram;
