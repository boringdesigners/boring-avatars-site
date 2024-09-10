import React from "react";
import styled from "styled-components";
import Avatar from "boring-avatars";
import Button from "../button";

const UploadAvatarWrapper = styled.div`
  header div {
    display: flex;
    gap: var(--sp-xs);
    align-items: center;
    gap: var(--sp-s);
    padding: var(--sp-m) var(--sp-m);
  }

  header p {
    flex: 1;
    line-height: 1.25;
    margin: 0;
    padding: 0;
  }

  header span {
    color: var(--c-body-secondary);
    margin-left: var(--sp-xs);
  }

  header img {
    width: 100%;
    display: block;
    height: calc(var(--sp-xl) * 4);
    object-fit: cover;
    background-color: var(--c-button);
    margin-bottom: var(--sp-s);
  }

  footer {
    padding: var(--sp-s) var(--sp-m);
    display: flex;
    gap: var(--sp-s);
    margin-bottom: var(--sp-m);
  }

  footer button {
    word-spacing: 0.25em;
  }

  footer button + button {
    flex: 1;
  }
`;

const UploadAvatarGroup = styled.div`
  display: flex;
  padding: var(--sp-m) var(--sp-m);

  svg + svg {
    margin-left: -0.25rem;
    filter: drop-shadow(2px 0 0 white) drop-shadow(-2px 0 0 white)
      drop-shadow(0 2px 0 white) drop-shadow(0 -2px 0 white);
  }

  span {
    margin-left: var(--sp-s);
  }
`;

const ExampleUpload = ({ name, likes, colors, variant, img }) => {
  return (
    <div className="card">
      <UploadAvatarWrapper>
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
        <UploadAvatarGroup>
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
        </UploadAvatarGroup>
        <footer>
          <Button>&#9825; Like</Button>
          <Button>Comment</Button>
        </footer>
      </UploadAvatarWrapper>
    </div>
  );
};

export default ExampleUpload;
