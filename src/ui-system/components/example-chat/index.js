import React from "react";
import styled from "styled-components";
import Avatar from "boring-avatars";

const ChatAvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--sp-s) var(--sp-m);

  > div {
    display: flex;
    align-items: center;
    gap: var(--sp-s);
    padding-bottom: var(--sp-m);
    padding-top: var(--sp-m);
  }

  > div + div {
    border-top: 1px solid var(--c-backgroundAlt);
  }

  h4 {
    margin: 0;
    font-size: 0.85rem;
    line-height: 1;
    margin-bottom: 0.2rem;
  }

  header {
    position: relative;
  }

  header span {
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    bottom: 0;
    right: 0;
    border: 2px solid white;
  }

  small {
    color: var(--c-body-secondary);
    align-self: flex-start;
    flex: 1;
    text-align: right;
  }
`;

const Badge = styled.span`
  background-color: ${(props) =>
    props.theme === "active"
      ? "rgb(198, 246, 217);"
      : "var(--c-backgroundAlt);"};
  color: ${(props) =>
    props.theme === "active" ? "rgb(15, 92, 46);" : "inherit"};
  padding: 0.1rem 0.4rem 0.15rem;
  border-radius: 99px;
  font-size: 0.65rem;
  margin-left: 0.25rem;
  font-weight: 500;
`;

const ExampleChat = ({ users, colors, variant }) => {
  return (
    <div className="card">
      <ChatAvatarWrapper>
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
              {user.status && <Badge theme="active">Active</Badge>}
            </div>
            <small>{user.time}</small>
          </div>
        ))}
      </ChatAvatarWrapper>
    </div>
  );
};

export default ExampleChat;
