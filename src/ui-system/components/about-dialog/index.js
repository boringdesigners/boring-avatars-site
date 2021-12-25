import React from 'react';
import styled, { keyframes } from 'styled-components'
import * as DialogPrimitive from '@radix-ui/react-dialog';
import Button from '../button';
import Avatar from 'boring-avatars'
import { About } from '../../../icons'

const overlayShow = keyframes`
  from { opacity: 0 },
`
const contentShow = keyframes`
  from { opacity: 0; transform: scale(.92); },
`
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
`

const CloseButton = styled(Button)`
  position: absolute;
  top: 5vh;
  right: 5vh;
`

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
`

const StyledContent = styled(DialogPrimitive.Content)`
  position: relative;
  max-width: 80ch;
  padding: var(--sp-l);
  font-family: 'SF Mono', SFMono-Regular, ui-monospace, 'DejaVu Sans Mono', Menlo, Consolas, monospace;
  font-weight: normal;
  line-height: 1.3;

  h2 {
    font-weight: normal;
    font-size: clamp(1.5rem, 8vw, 2.5rem);
  }

  p {
    font-size: clamp(1rem, 5vw, 1.25rem);
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: ${contentShow} 1s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:focus: { outline: none; }
`

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

const AboutDialog = ({ playgroundColors, ...props }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button
        aria-label="Read more information"
        icon={<About />}
      />
    </DialogTrigger>
    <DialogContent>
      <h2>
        Hi, we are
        {" "}
        <Contributor target="_blank" href="https://hayk.design/#/" rel="noopener noreferrer">
          <Avatar
            name={'hihayk'}
            colors={playgroundColors}
            variant={'beam'}
          />
          hihayk
        </Contributor>
        {" "}
        and
        {" "}
        <Contributor target="_blank" href="http://www.josepmartins.com/" rel="noopener noreferrer">
          <Avatar
            name={'josepmartins'}
            colors={playgroundColors}
            variant={'beam'}
          />
          josepmartins
        </Contributor>
        , a Barcelona based front-end and product design duo.
      </h2>
      <p>
        Boring avatars is a tiny JavaScript
        {" "}
        <a target="_blank" href="https://github.com/boringdesigners/boring-avatars" rel="noopener noreferrer">React library</a>
        {" "}
        that generates custom, SVG-based avatars from any username and color palette. Feel free to use it in your personal or commercial projects.
      </p>
      <p>
        The playground allows you to change names, generate random color palettes or copy the generated SVG's and use them in any design tool like Figma, Sketch or directly into your web project.
      </p>
      <p>
        If you like the project you can contribute
        {" "}
        <a target="_blank" href="https://ko-fi.com/boringdesginers/" rel="noopener noreferrer">with a coffee</a>
        {" "}
        so we can keep up with the work.
      </p>
      <DialogClose asChild>
        <CloseButton>Close</CloseButton>
      </DialogClose>
    </DialogContent>
  </Dialog>
);

export default AboutDialog;
