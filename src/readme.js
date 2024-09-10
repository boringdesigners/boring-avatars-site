import React from "react";
import styled from "styled-components";
import Avatar from "boring-avatars";
import { exampleNames } from "./example-names";
import Button from "./ui-system/components/button";
import Footer from "./ui-system/components/footer";
import { Github } from "./icons";
import GitHubStars from "./ui-system/components/github-stars";

const ReadmeWrapper = styled.div`
  margin: 5rem auto 10rem;
  justify-content: center;
  margin-left: -15rem;
  display: flex;
  padding: 0 var(--pagePadding);
  position: relative;

  @media (max-width: 1000px) {
    margin-left: 0;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    margin-top: var(--sp-xxl);
  }

  p code {
    font-size: 0.9em;
    background-color: var(--c-backgroundCode);
    padding: 0.2em 0.4em;
    border-radius: 0.25em;
  }
`;

const Badge = styled.span`
  font-size: 0.65rem;
  padding: 0.25rem 0.5rem;
  border-radius: 999px;
  margin-right: -0.25rem;
  font-weight: normal;
  background-color: ${(props) =>
    props.variant === "paid" ? "#D2FFA5" : "var(--c-backgroundAlt)"};
`;

const Sidebar = styled.aside`
  position: sticky;
  top: 0;
  height: 100%;
  min-width: 15rem;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const Main = styled.main`
  max-width: 32.5rem;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const AvatarWrapper = styled.div`
  margin-bottom: var(--sp-xl);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
  gap: var(--sp-xs);
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
  }

  @media (max-width: 1000px) {
    display: flex;
  }
`;

const MainCTA = styled.div`
  display: flex;
  gap: var(--sp-s);
  flexwrap: wrap;
`;

const colors = ["#0a0310", "#49007e", "#ff005b", "#ff7d10", "#ffb238"];
const size = 50;
const variants = ["marble", "beam", "pixel", "sunset", "bauhaus", "ring"];
const names = exampleNames.slice(10, 21);

const Readme = () => {
  return (
    <ReadmeWrapper>
      <Sidebar>
        <ul>
          <li>
            <a href="#react-library">React library</a>
          </li>
          <li>
            <a href="#api-service">API service</a>
          </li>
        </ul>
      </Sidebar>
      <Main>
        <AvatarWrapper>
          {names.map((name) => (
            <Avatar
              key={name}
              name={name}
              size={size}
              variant={variants[Math.floor(Math.random() * variants.length)]}
              colors={colors}
            />
          ))}
        </AvatarWrapper>
        <h1>Generate unique SVG avatars</h1>
        <p>
          Boring avatars is an open source React library and API service that
          generates unique SVG-based user avatars from usernames and color
          palettes.
        </p>
        <MainCTA>
          <Button
            as="a"
            href="https://github.com/boringdesigners/boring-avatars"
            icon={<Github />}
          >
            React{" "}
            <Badge variant="defaul">
              <GitHubStars user="boringdesigners" repo="boring-avatars" />
            </Badge>{" "}
          </Button>
          <Button
            as="a"
            href="https://boringdesigners.gumroad.com/l/boring-avatars-service"
          >
            API Service <Badge variant="paid">Paid</Badge>
          </Button>
        </MainCTA>
        <h2 id="react-library">React library</h2>
        <h3>Installation</h3>
        <pre>
          <code>npm install boring-avatars</code>
        </pre>
        <h3>Usage</h3>
        <p>Import the component and use it in your React application:</p>
        <pre>
          <code>
            {`import Avatar from "boring-avatars";

<Avatar name="Margaret Brent"/>`}
          </code>
        </pre>
        <h3>Props</h3>
        <h4>Name</h4>
        <p>
          The <code>name</code> prop is used to generate the avatar. It can be
          the username, email or any random string.
        </p>
        <pre>
          <code>{`<Avatar name="Maria Mitchell"/>`}</code>
        </pre>
        <Avatar name="Maria Mitchell" size={size} colors={colors} />
        <h4>Variant</h4>
        <p>
          The <code>variant</code> prop is used to change the theme of the
          avatar. The available variants are: <code>marble</code>,{" "}
          <code>beam</code>, <code>pixel</code>, <code>sunset</code>,{" "}
          <code>ring</code> and <code>bauhaus</code>.
        </p>
        <pre>
          <code>{`<Avatar name="Alice Paul" variant="beam"/>`}</code>
        </pre>
        <Avatar name="Alice Paul" variant="beam" size={size} colors={colors} />
        <h4>Size</h4>
        <p>
          The <code>size</code> prop is used to change the size of the avatar.
        </p>
        <pre>
          <code>{`<Avatar name="Ada Lovelace" size={88}/>`}</code>
        </pre>
        <Avatar name="Ada Lovelace" size={88} colors={colors} />
        <h4>Colors</h4>
        <p>
          The <code>colors</code> prop is used to change the color palette of
          the avatar.
        </p>
        <pre>
          <code>
            {`<Avatar name="Grace Hopper" colors={["#fb6900", "#f63700", "#004853", "#007e80", "#00b9bd"]}/>`}
          </code>
        </pre>
        <Avatar
          name="Grace Hopper"
          size={size}
          colors={["#fb6900", "#f63700", "#004853", "#007e80", "#00b9bd"]}
        />
        <h4>Square</h4>
        <p>
          The <code>square</code> prop is used to make the avatar square.
        </p>
        <pre>
          <code>{`<Avatar name="Helen Keller" square/>`}</code>
        </pre>
        <Avatar name="Helen Keller" square size={size} colors={colors} />
        <h2 id="api-service">API service</h2>
        <p>
          Boring avatars has a simple-to-use API with no login.{" "}
          <a href="https://boringdesigners.gumroad.com/l/boring-avatars-service">
            Subscribe
          </a>{" "}
          to get access and start generating unique, random avatars on demand.
        </p>
        <p>The subscription plan includes two tiers:</p>
        <ul>
          <li>Basic: up to 100K monthly requests</li>
          <li>Pro: up to 500k monthly requests</li>
        </ul>
        <p>
          For higher usage, please{" "}
          <a href="mailto:jsp.mrtns@gmail.com">contact us</a>.
        </p>
        <h3>Usage</h3>
        <p>
          Our API is set up to respond only to requests from your specified
          domain using CORS (Cross-Origin Resource Sharing) validation, ensuring
          it works exclusively where you need it.
        </p>
        <p>
          During checkout, you'll provide one production and one development
          domain where you intend to use the API. we'll create a custom endpoint
          for you and send an email with further instructions within 24 hours.
        </p>
        <p>
          With your custom domain, you can start generating avatars using the
          provided URL.
        </p>
        <pre>
          <code>{`{CUSTOM_DOMAIN}?name={NAME}&variant={VARIANT}&size={SIZE}&colors={COLORS}&square`}</code>
        </pre>
        <p>
          Use the URL in an <code>img</code> tag with the{" "}
          <code>crossorigin</code> property to make sure the request uses CORS
          headers.
        </p>
        <pre>
          <code>{`<img src="{CUSTOM_DOMAIN}" crossorigin>`}</code>
        </pre>
        <h3>Props</h3>
        <h4>Name</h4>
        <p>
          Use the <code>name</code> parameter to generate a unique avatar
          design. It can be the username, email or any random string.
        </p>
        <pre>
          <code>{`<img src="{CUSTOM_DOMAIN}?name=Maria%20Mitchell" crossorigin>`}</code>
        </pre>
        <h4>Variant</h4>
        <p>
          Use the <code>variant</code> parameter to change the theme of the
          avatar. The available variants are: <code>marble</code>,{" "}
          <code>beam</code>, <code>pixel</code>, <code>sunset</code>,{" "}
          <code>ring</code> and <code>bauhaus</code>.
        </p>
        <pre>
          <code>{`<img src="{CUSTOM_DOMAIN}?variant=beam" crossorigin>`}</code>
        </pre>
        <h4>Size</h4>
        <p>
          Use the <code>size</code> parameter to change the size of the avatar.
        </p>
        <pre>
          <code>{`<img src="{CUSTOM_DOMAIN}?size=240" crossorigin>`}</code>
        </pre>
        <h4>Colors</h4>
        <p>
          Use the <code>colors</code> parameter to change the color palette of
          the avatar.
        </p>
        <pre>
          <code>{`<img src="{CUSTOM_DOMAIN}?colors=264653,2a9d8f,e9c46a,f4a261,e76f51" crossorigin>`}</code>
        </pre>
        <h4>Square</h4>
        <p>
          Use the <code>square</code> parameter to make the avatar square.
        </p>
        <pre>
          <code>{`<img src="{CUSTOM_DOMAIN}?square crossorigin>`}</code>
        </pre>
        <h4>Random</h4>
        <p>
          If you just want to use random avatars without providing usernames,
          you can use the root endpoint. You will receive an SVG image with a
          80*80px <code>size</code> and the <code>marble</code> variant.
        </p>
        <pre>
          <code>{`<img src="{CUSTOM_DOMAIN} crossorigin>`}</code>
        </pre>
        <p>
          If you have any questions or need help, please{" "}
          <a href="mailto:jsp.mrtns@gmail.com">contact us</a>.
        </p>

        <Footer colors={colors} />
      </Main>
    </ReadmeWrapper>
  );
};

export default Readme;
