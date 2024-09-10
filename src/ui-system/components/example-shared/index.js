import React from "react";
import styled from "styled-components";
import Avatar from "boring-avatars";

const SharedAvatarWrapper = styled.div`
  padding: var(--sp-s) var(--sp-m);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(46px, 1fr));
  gap: var(--sp-s);

  h3 {
    grid-column: 1 / -1;
  }
`;

const SharedAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: var(--sp-s);

  h4 {
    margin-bottom: var(--sp-m);
    margin-top: var(--sp-s);
    font-size: 0.75rem;
  }

  small {
    color: var(--c-body-secondary);
  }
`;

const ExampleShared = ({ users, colors, variant }) => {
  return (
    <div className="card">
      <SharedAvatarWrapper>
        <h3>Share</h3>
        {users.map((user, index) => (
          <SharedAvatar key={index}>
            <Avatar
              name={user.name}
              colors={colors}
              size="42"
              variant={variant}
            />
            <h4>{user.name}</h4>
          </SharedAvatar>
        ))}
      </SharedAvatarWrapper>
    </div>
  );
};

export default ExampleShared;
