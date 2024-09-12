import React from "react";
import styled from "styled-components";
import ExampleChat from "../example-chat";
import ExampleProfile from "../example-profile";
import ExampleSuggested from "../example-suggested";
import ExampleShared from "../example-shared";
import ExampleUpload from "../example-upload";
import ExampleInstagram from "../example-instagram";
import ExampleTwitter from "../example-twitter";
import Avatar from "boring-avatars";

const Section = styled.section`
  display: grid;
  grid-template-columns: 320px 1fr;
  grid-gap: var(--sp-xl);
  margin-top: calc(var(--sp-xl) * 4);

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const Code = styled.div`
  height: fit-content;
  position: sticky;
  top: 0;

  @media (max-width: 1000px) {
    position: static;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(28px, 1fr));
    gap: var(--sp-xs);
    align-items: center;
    justify-content: center;
    margin: 0 0 margin-bottom: var(--sp-xl);
    padding: 0;

    svg {
      width: 100%;
    }

    li {
      list-style: none;
    }

    @media (max-width: 1000px) {
      display: flex;
    }
  }



  pre {
    line-break: anywhere;
  }
`;

const ExampleWrapper = styled.div`
  font-family: var(--font-sans);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(4, min-content);
  grid-gap: var(--sp-l);
  padding: var(--sp-xl);
  border-radius: 1rem;
  background: linear-gradient(
    210deg,
    ${(props) => props.colors[0] + "18"},
    ${(props) => props.colors[1] + "18"}
  );

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }

  & > .card:nth-child(1) {
    grid-row: span 2;
  }
  & > .card:nth-child(2) {
    grid-row: span 2;
  }
  & > .card:nth-child(3) {
    grid-row: span 1;
  }
  & > .card:nth-child(4) {
    grid-row: span 2;
  }
  & > .card:nth-child(5) {
    grid-row: span 2;
  }
  & > .card:nth-child(6) {
    grid-row: span 2;
  }
  & > .card:nth-child(7) {
    grid-row: span 1;
  }
`;

const Example = ({
  title,
  imgProfile,
  variant,
  colors,
  nameProfile,
  nameInstagram,
  nameUpload,
  nameUploadLikes,
  nameSample,
  dataList,
  dataTwitter,
  dataSuggested,
  dataShared,
}) => {
  const colorsHex = colors.map((color) => `"${color}"`).join(", ");
  const colorsWithoutHash = colors.map((color) => color.slice(1));
  return (
    <Section>
      <Code>
        <h2>{title}</h2>
        <ul>
          {nameSample.map((name, index) => (
            <li key={index}>
              <Avatar name={name} colors={colors} variant={variant} />
            </li>
          ))}
        </ul>
        <h3>React component</h3>
        <pre>
          <code>{`<Avatar name="Mary Edwards" colors={[${colorsHex}]} variant="${variant}" />`}</code>
        </pre>
        <h3>
          API service{" "}
          <a href="https://boringdesigners.gumroad.com/l/boring-avatars-service">
            <small>Subscribe</small>
          </a>
        </h3>
        <pre>
          <code>
            {`<img src="{YOUR_DOMAIN}/api/avatar?name=Mary%20Edwards&colors=${colorsWithoutHash}&variant=${variant}" crossorigin />`}
          </code>
        </pre>
      </Code>
      <ExampleWrapper colors={colors}>
        <ExampleUpload
          img={imgProfile}
          name={nameUpload}
          colors={colors}
          variant={variant}
          likes={nameUploadLikes}
        />
        <ExampleTwitter users={dataTwitter} colors={colors} variant={variant} />
        <ExampleInstagram
          colors={colors}
          variant={variant}
          name={nameInstagram}
        />
        <ExampleProfile
          img={imgProfile}
          name={nameProfile}
          colors={colors}
          variant={variant}
        />
        <ExampleChat users={dataList} colors={colors} variant={variant} />
        <ExampleSuggested
          users={dataSuggested}
          colors={colors}
          variant={variant}
        />
        <ExampleShared users={dataShared} colors={colors} variant={variant} />
      </ExampleWrapper>
    </Section>
  );
};

export default Example;
