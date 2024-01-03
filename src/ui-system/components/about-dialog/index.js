import React from "react";
import styled, { keyframes } from "styled-components";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import Button from "../button";
import Avatar from "boring-avatars";
import { About } from "../../../icons";

const overlayShow = keyframes`
  from { opacity: 0 },
`;
const contentShow = keyframes`
  from { opacity: 0; transform: scale(.92); },
`;
const Contributor = styled.a`
  color: inherit;
  display: inline-flex;
  gap: var(--sp-s);
  align-items: baseline;

  & svg {
    display: inline-flex;
    align-self: center;
    width: 0.85em;
    height: 0.85em;
  }
`;

const Sponsors = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--sp-s);
  background-color: #f5f5f5;
  padding: var(--sp-s);
  border-radius: 0.375rem;
  gap: var(--sp-m);
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: calc(var(--sp-l) * -1);
  right: var(--sp-l);
`;

const StyledOverlay = styled(DialogPrimitive.Overlay)`
  background-color: var(--c-background);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  overflow-y: auto;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${overlayShow} 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  a {
    position: relative;
    color: inherit;
    text-decoration: underline;
  }
`;

const StyledContent = styled(DialogPrimitive.Content)`
  position: relative;
  max-width: 80ch;
  padding: var(--sp-l);
  font-family: "SF Mono", SFMono-Regular, ui-monospace, "DejaVu Sans Mono",
    Menlo, Consolas, monospace;
  font-weight: normal;

  h2 {
    font-weight: normal;
    font-size: clamp(1.25rem, 6vw, 2rem);
    line-height: 1.3;
    margin-top: 0;
  }

  p {
    font-size: clamp(1rem, 5vw, 1.25rem);
    line-height: 1.5;
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: ${contentShow} 1s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:focus: {
    outline: none;
  }
`;

function Content({ children, ...props }) {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay>
        <StyledContent {...props}>{children}</StyledContent>
      </StyledOverlay>
    </DialogPrimitive.Portal>
  );
}

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogContent = Content;
const DialogClose = DialogPrimitive.Close;

const AboutDialog = ({ playgroundColors, variant, ...props }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button aria-label="Read more information" icon={<About />} />
    </DialogTrigger>
    <DialogContent>
      <h2>
        We are{" "}
        <Contributor
          target="_blank"
          href="https://hayk.design/#/"
          rel="noopener noreferrer"
        >
          <Avatar name={"hihayk"} colors={playgroundColors} variant={variant} />
          hihayk
        </Contributor>{" "}
        and{" "}
        <Contributor
          target="_blank"
          href="http://www.josepmartins.com/"
          rel="noopener noreferrer"
        >
          <Avatar
            name={"josepmartins"}
            colors={playgroundColors}
            variant={variant}
          />
          josepmartins
        </Contributor>
        , a Barcelona based front-end and product design duo.
      </h2>
      <p>
        Boring avatars is a tiny{" "}
        <a
          target="_blank"
          href="https://github.com/boringdesigners/boring-avatars"
          rel="noopener noreferrer"
        >
          React library
        </a>{" "}
        to generates custom, SVG-based avatars from any username and color
        palette. Feel free to use it in your personal or commercial projects.
      </p>
      <p>
        Use this playground to change names, generate random color palettes and
        copy the generated SVG's to use them in any design tool like Figma,
        Sketch or into your web project.
      </p>
      <p>
        To generate avatars on the go you can use our{" "}
        <a
          target="_blank"
          href="https://github.com/boringdesigners/boring-avatars-service"
          rel="noopener noreferrer"
        >
          boring avatars service
        </a>
        .
      </p>
      <p>
        If you like the project, help us to keep it alive through our{" "}
        <a
          target="_blank"
          href="https://github.com/sponsors/boringdesigners"
          rel="noopener noreferrer"
        >
          GitHub sponsors page 🫶
        </a>
        .
      </p>
      <DialogClose asChild>
        <CloseButton>Close</CloseButton>
      </DialogClose>
    </DialogContent>
  </Dialog>
);

export default AboutDialog;
