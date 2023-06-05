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
  align-items: center;
  gap: var(--sp-s);
  margin-top: var(--sp-l);
  background-color: #f5f5f5;
  padding: var(--sp-m);
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
      <Sponsors>
        <a href="https://clerk.com?utm_source=boringavatars&utm_medium=web&utm_campaign=sponsorship">
          <svg
            width="24"
            height="30"
            viewBox="0 0 24 30"
            fill="none"
            alt="Clerk.dev logo"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.7873 3.9332L20.2028 7.51767C20.0902 7.63018 19.943 7.70162 19.785 7.72052C19.6268 7.73943 19.467 7.7047 19.331 7.62192C17.921 6.7713 16.2949 6.34707 14.6489 6.40046C13.003 6.45386 11.4079 6.98258 10.0559 7.9228C9.22444 8.50155 8.50247 9.22352 7.9237 10.055C6.9846 11.4078 6.45638 13.003 6.40257 14.649C6.34878 16.2949 6.77169 17.9213 7.62045 19.3325C7.70264 19.4683 7.73703 19.6276 7.71814 19.7852C7.69925 19.9428 7.62816 20.0895 7.51621 20.202L3.93173 23.7864C3.85956 23.859 3.77253 23.9153 3.6766 23.9511C3.58068 23.9871 3.47815 24.0018 3.376 23.9944C3.27385 23.987 3.17451 23.9576 3.08479 23.9082C2.99506 23.8588 2.91707 23.7906 2.85616 23.7082C0.916731 21.0424 -0.0855612 17.8095 0.00572671 14.5142C0.0970147 11.2188 1.27675 8.0464 3.36078 5.49207C3.99701 4.71055 4.71145 3.99609 5.49299 3.35987C8.04712 1.2764 11.2191 0.097014 14.5139 0.00572822C17.8088 -0.0855575 21.0411 0.916393 23.7067 2.85524C23.7897 2.91595 23.8584 2.99393 23.9082 3.08377C23.9581 3.17361 23.9878 3.27319 23.9955 3.37565C24.0032 3.47811 23.9886 3.58102 23.9526 3.67727C23.9166 3.77352 23.8603 3.86084 23.7873 3.9332Z"
              fill="url(#paint0_linear_1023_319)"
            />
            <path
              d="M23.7833 25.9189L20.1988 22.3343C20.0862 22.2218 19.939 22.1504 19.7809 22.1315C19.6229 22.1126 19.463 22.1473 19.327 22.2301C17.9975 23.032 16.4743 23.456 14.9217 23.456C13.369 23.456 11.8458 23.032 10.5163 22.2301C10.3803 22.1473 10.2204 22.1126 10.0623 22.1315C9.90423 22.1504 9.75707 22.2218 9.64443 22.3343L6.05995 25.9189C5.98478 25.991 5.92643 26.079 5.88905 26.1763C5.85166 26.2736 5.83616 26.378 5.84362 26.4821C5.85108 26.5861 5.88133 26.6871 5.93223 26.7781C5.98313 26.8692 6.05342 26.9478 6.13814 27.0086C8.68965 28.865 11.7639 29.865 14.9193 29.865C18.0747 29.865 21.1489 28.865 23.7005 27.0086C23.7854 26.9482 23.8561 26.8698 23.9075 26.779C23.9588 26.6881 23.9895 26.5872 23.9975 26.4832C24.0053 26.3792 23.9903 26.2746 23.9533 26.1772C23.9162 26.0796 23.8582 25.9914 23.7833 25.9189Z"
              fill="#1F0256"
            />
            <path
              d="M14.929 19.1909C17.2841 19.1909 19.1934 17.2816 19.1934 14.9264C19.1934 12.5713 17.2841 10.662 14.929 10.662C12.5738 10.662 10.6646 12.5713 10.6646 14.9264C10.6646 17.2816 12.5738 19.1909 14.929 19.1909Z"
              fill="#1F0256"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1023_319"
                x1="20.4185"
                y1="-2.18861"
                x2="-9.81152"
                y2="28.0437"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#17CCFC" />
                <stop offset="0.5" stop-color="#5D31FF" />
                <stop offset="1" stop-color="#F35AFF" />
              </linearGradient>
            </defs>
          </svg>
        </a>
        <span>
          <a href="https://clerk.com?utm_source=boringavatars&utm_medium=web&utm_campaign=sponsorship">
            Clerk
          </a>{" "}
          provides drop-in authentication for React and has built-in support for
          Boring Avatars.
        </span>
      </Sponsors>
      <DialogClose asChild>
        <CloseButton>Close</CloseButton>
      </DialogClose>
    </DialogContent>
  </Dialog>
);

export default AboutDialog;
