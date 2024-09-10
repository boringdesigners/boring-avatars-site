import React from "react";
import styled from "styled-components";
import Avatar from "boring-avatars";
import Button from "../button";

const InstagramAvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--sp-m);

  header {
    align-items: center;
    gap: var(--sp-m);
    display: flex;
  }

  header div {
    display: flex;
    flex: 1;
  }

  h3 {
    margin-bottom: 0;
    margin-top: 0.75rem;
  }

  small {
    color: var(--c-body-secondary);
    margin-bottom: 0.5rem;
  }

  button {
    margin-top: var(--sp-s);
  }
`;

const InstagramData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--sp-s);
  font-size: 0.75rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div span:first-child {
    font-weight: 700;
    margin: 0;
    line-height: 1;
  }

  div span:last-child {
    color: var(--c-body-secondary);
  }
`;

const ExampleInstagram = ({ name, colors, variant, img }) => {
  return (
    <div className="card">
      <InstagramAvatarWrapper>
        <header>
          <Avatar name={name} size="54" variant={variant} colors={colors} />
          <div>
            <InstagramData>
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
            </InstagramData>
          </div>
        </header>
        {/* <Button>Follow</Button> */}
        <h3>{name}</h3>
        <small>Designer | Frontend developer</small>
        <Button>Follow</Button>
      </InstagramAvatarWrapper>
    </div>
  );
};

export default ExampleInstagram;
