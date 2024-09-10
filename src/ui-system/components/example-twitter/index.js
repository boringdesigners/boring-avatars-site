import React from "react";
import styled from "styled-components";
import Avatar from "boring-avatars";

const TwitterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--sp-l);

  > div {
    display: flex;
    align-items: center;
    gap: var(--sp-s);
    margin-top: var(--sp-s);
    margin-left: 2rem;
  }

  > div small {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  > div svg {
    min-width: fit-content;
  }

  h4 {
    margin: 0;
    font-size: 0.85rem;
    line-height: 1;
  }

  small {
    color: var(--c-body-secondary);
  }

  header {
    display: flex;
    gap: var(--sp-s);
    margin-bottom: var(--sp-s);
  }

  header svg {
    min-width: fit-content;
  }

  header p {
    margin-bottom: 0;
    margin-top: 0.5rem;
  }

  header div > div:first-child {
    background-color: var(--c-backgroundAlt);
    padding: var(--sp-m);
    border-radius: 0.5rem;
    margin-bottom: var(--sp-s);
  }

  header div > div:last-child {
    display: flex;
    gap: var(--sp-s);
  }
`;

const ExampleTwitter = ({ users, colors, variant }) => {
  const firstUser = users[0];
  const usersWithoutFirst = users.slice(1);

  return (
    <div className="card">
      <TwitterWrapper>
        <header>
          <Avatar
            name={firstUser.name}
            colors={colors}
            size="28"
            variant={variant}
          />
          <div>
            <div>
              <h4>{firstUser.name}</h4>
              <p>
                I need a hobby so I think I’m gonna start calling the phone
                numbers on missing cat posters and just “meow” at whoever
                answers
              </p>
            </div>
            <div>
              <small>Reply</small>
              <small>React</small>
            </div>
          </div>
        </header>
        {usersWithoutFirst.map((user, index) => (
          <div key={index}>
            <Avatar
              name={user.name}
              colors={colors}
              size="22"
              variant={variant}
            />
            <h4>{user.name}</h4>
            <small>{user.comment}</small>
          </div>
        ))}
      </TwitterWrapper>
    </div>
  );
};

export default ExampleTwitter;
