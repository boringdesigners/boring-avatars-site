import React from "react";
import styled from "styled-components";
import Avatar from "boring-avatars";
import Button from "../button";

const ProfileAvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h4 {
    margin-bottom: 0;
    margin-top: 0.75rem;
    font-size: 1rem;
  }

  small {
    color: var(--c-body-secondary);
    margin-bottom: 0.5rem;
  }

  svg {
    filter: drop-shadow(2px 0 0 white) drop-shadow(-2px 0 0 white)
      drop-shadow(0 2px 0 white) drop-shadow(0 -2px 0 white);
  }

  header {
    width: 100%;
    overflow: hidden;
  }

  header img {
    display: block;
    height: calc(var(--sp-xl) * 2.5);
    width: 100%;
    transform: scale(1.3);
    object-fit: cover;
    background-color: var(--c-button);
    filter: blur(20px);
  }

  div:last-child {
    margin-top: calc(var(--sp-l) * -1);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--sp-s);
  }
`;

const ExampleProfile = ({ name, colors, variant, img }) => {
  return (
    <div className="card">
      <ProfileAvatarWrapper>
        <header>
          <img src={img} alt="background" />
        </header>
        <div>
          <Avatar name={name} size="72" variant={variant} colors={colors} />
          <h4>{name}</h4>
          <small>1.2M followers · 451 following</small>
          <Button>Follow</Button>
        </div>
      </ProfileAvatarWrapper>
    </div>
  );
};

export default ExampleProfile;
