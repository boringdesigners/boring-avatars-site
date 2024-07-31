import React from "react";
import styled from "styled-components";
import Avatar from "boring-avatars";
import { exampleNames } from "./example-names";
import Button from "./ui-system/components/button";
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

  p svg {
    vertical-align: middle;
    margin-right: 5px;
    position: relative;
    top: -1px;
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

const Pre = styled.pre`
  width: 100%;
  display: block;
  padding: var(--sp-s) var(--sp-m);
  border-radius: 0.25rem;
  background-color: var(--c-backgroundCode);
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;

  & + h2,
  & + h3,
  & + h4 {
    margin-top: var(--sp-xl);
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
            <a href="#react">React</a>
          </li>
          <li>
            <a href="#api-service">API service</a>
          </li>
          <li>
            <a href="#credits">Credits</a>
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
        <p>
          Boring avatars is an open source React library and API service that
          generates unique SVG-based avatars from usernames and color palettes.
        </p>
        <MainCTA>
          <Button
            as="a"
            href="https://github.com/boringdesigners/boring-avatars"
            icon={<Github />}
          >
            React library{" "}
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
        <h2 id="react">React</h2>
        <h3>Installation</h3>
        <Pre>
          <code>npm install boring-avatars</code>
        </Pre>
        <h3>Usage</h3>
        <p>Import the component and use it in your React application:</p>
        <Pre>
          <code>
            {`import Avatar from "boring-avatars";

<Avatar name="Margaret Brent"/>`}
          </code>
        </Pre>
        <h3>Props</h3>
        <h4>Name</h4>
        <p>
          The <code>name</code> prop is used to generate the avatar. It can be
          the username, email or any random string.
        </p>
        <Pre>
          <code>{`<Avatar name="Maria Mitchell"/>`}</code>
        </Pre>
        <Avatar name="Maria Mitchell" size={size} colors={colors} />
        <h4>Variant</h4>
        <p>
          The <code>variant</code> prop is used to change the theme of the
          avatar. The available variants are: <code>marble</code>,{" "}
          <code>beam</code>, <code>pixel</code>, <code>sunset</code>,{" "}
          <code>ring</code> and <code>bauhaus</code>.
        </p>
        <Pre>
          <code>{`<Avatar name="Alice Paul" variant="beam"/>`}</code>
        </Pre>
        <Avatar name="Alice Paul" variant="beam" size={size} colors={colors} />
        <h4>Size</h4>
        <p>
          The <code>size</code> prop is used to change the size of the avatar.
        </p>
        <Pre>
          <code>{`<Avatar name="Ada Lovelace" size={88}/>`}</code>
        </Pre>
        <Avatar name="Ada Lovelace" size={88} colors={colors} />
        <h4>Colors</h4>
        <p>
          The <code>colors</code> prop is used to change the color palette of
          the avatar.
        </p>
        <Pre>
          <code>
            {`<Avatar name="Grace Hopper" colors={["#fb6900", "#f63700", "#004853", "#007e80", "#00b9bd"]}/>`}
          </code>
        </Pre>
        <Avatar
          name="Grace Hopper"
          size={size}
          colors={["#fb6900", "#f63700", "#004853", "#007e80", "#00b9bd"]}
        />
        <h4>Square</h4>
        <p>
          The <code>square</code> prop is used to make the avatar square.
        </p>
        <Pre>
          <code>{`<Avatar name="Helen Keller" square/>`}</code>
        </Pre>
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
          <a href="mailto:jsp.mrtns@gmail.com">Contact us</a> for usage above
          500k monthly requests or custom plans.
        </p>
        <h3>Usage</h3>
        <p>
          During the checkout process, we will ask you for the domain where you
          will use the API. After the payment is completed, all requests using
          the following endpoint will return an SVG-based image stream to be
          used directly in a <code>img</code> tag.
        </p>
        <Pre>
          <code>{`<img src="{YOUR_DOMAIN/}/api/avatar" crossorigin />`}</code>
        </Pre>
        <p>
          Use <code>crossorigin</code> to make sure the request uses CORS
          headers and the credential flag is set to 'same-origin'.
        </p>
        <h3>Props</h3>
        <h4>Name</h4>
        <p>
          The <code>name</code> parameter is used to generate the avatar. It can
          be the username, email or any random string.
        </p>
        <Pre>
          <code>{`{YOUR_DOMAIN}/api/avatar?name=Maria%20Mitchell`}</code>
        </Pre>
        <h4>Variant</h4>
        <p>
          The <code>variant</code> parameter is used to change the theme of the
          avatar. The available variants are: <code>marble</code>,{" "}
          <code>beam</code>, <code>pixel</code>, <code>sunset</code>,{" "}
          <code>ring</code> and <code>bauhaus</code>.
        </p>
        <Pre>
          <code>{`{YOUR_DOMAIN}/api/avatar?variant=beam`}</code>
        </Pre>
        <h4>Size</h4>
        <p>
          The <code>size</code> parameter is used to change the size of the
          avatar.
        </p>
        <Pre>
          <code>{`{YOUR_DOMAIN}/api/avatar?variant=marble&size=240`}</code>
        </Pre>
        <h4>Colors</h4>
        <p>
          The <code>colors</code> parameter is used to change the color palette
          of the avatar.
        </p>
        <Pre>
          <code>
            {`{YOUR_DOMAIN}/api/avatar?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`}
          </code>
        </Pre>
        <h4>Square</h4>
        <p>
          The <code>square</code> parameter is used to make the avatar square.
        </p>
        <Pre>
          <code>{`{YOUR_DOMAIN}/api/avatar?square`}</code>
        </Pre>
        <h4>Random</h4>
        <p>
          If you just want to use random avatars without providing usernames,
          you can use the root endpoint. You will receive an SVG image with a
          80*80px <code>size</code> and the <code>marble</code> variant.
        </p>
        <Pre>
          <code>{`{YOUR_DOMAIN}/api/avatar`}</code>
        </Pre>
        <h4>Notes</h4>
        <p>
          After the checkout, the API will be available for the domain you
          provided during the next 24 hours. If you need to change the domain,
          please <a href="mailto:jsp.mrtns@gmail.com">contact us</a>.
        </p>

        <h2 id="credits">Credits</h2>
        <p>
          This project was built by{" "}
          <a href="https://hayk.design/">
            <Avatar name="Hayk An" size="1em" colors={colors} />
            Hayk An
          </a>
          ,{" "}
          <a href="https://vieron.net/">
            <Avatar name="Javi Sánchez-Marín" size="1em" colors={colors} />
            Javi Sánchez-Marín
          </a>
          ,{" "}
          <a href="https://enric.dev/">
            <Avatar name="Enric Pallerols" size="1em" colors={colors} />
            Enric Pallerols
          </a>{" "}
          and{" "}
          <a href="https://josepmartins.com/">
            <Avatar name="Josep Martins" size="1em" colors={colors} />
            Josep Martins
            <img
              alt=""
              src="https://boringavatars.com//api/avatar?name=Josep%20Martins"
            />
          </a>
          .
        </p>
        <p>
          The names used are from the{" "}
          <a href="https://notablewomen.withgoogle.com/all">Notable Women</a>{" "}
          project, and the colors are from the{" "}
          <a href="https://github.com/Jam3/nice-color-palettes">
            Nice Color Palettes
          </a>{" "}
          made by <a href="https://www.mattdesl.com/">Matt DesLauriers</a>.
        </p>
      </Main>
    </ReadmeWrapper>
  );
};

export default Readme;
