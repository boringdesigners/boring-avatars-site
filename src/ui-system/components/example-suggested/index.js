import React from "react";
import styled from "styled-components";
import Avatar from "boring-avatars";
import Button from "../button";

const SuggestedAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid var(--c-backgroundAlt);
  padding: var(--sp-m);

  h4 {
    margin-bottom: var(--sp-m);
    margin-top: var(--sp-s);
  }

  small {
    color: var(--c-body-secondary);
  }
`;

const SuggestedAvatarWrapper = styled.div`
  padding: var(--sp-s) var(--sp-m);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: var(--sp-s);

  h3 {
    grid-column: 1 / -1;
  }
`;

const ExampleSuggested = ({ users, colors, variant }) => {
  return (
    <div className="card">
      <SuggestedAvatarWrapper>
        <h3>Mutual followers</h3>
        {users.map((user, index) => (
          <SuggestedAvatar key={index}>
            <Avatar
              name={user.name}
              colors={colors}
              size="48"
              variant={variant}
            />
            <h4>{user.name}</h4>
            <Button>Follow</Button>
          </SuggestedAvatar>
        ))}
      </SuggestedAvatarWrapper>
    </div>
  );
};

export default ExampleSuggested;
