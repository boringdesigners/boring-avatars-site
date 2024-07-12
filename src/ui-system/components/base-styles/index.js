import { createGlobalStyle, css } from "styled-components";

const cssVariables = css`
  --sp-xs: 0.25rem;
  --sp-s: 0.5rem;
  --sp-m: 1rem;
  --sp-l: 1.5rem;
  --sp-xl: 3rem;
  --sp-xxl: 4rem;

  --textbox-x: 0.8rem;
  --textbox-y: 0.4rem;
  --textbox: 0.4rem 1rem;

  --pagePadding: calc(var(--sp-s) + 2vw);

  --buttonHeight: 1.75rem;

  --c-fieldHover: hsla(0, 0%, 0%, 0.15);
  --c-fieldFocus: hsla(0, 0%, 0%, 0.3);
  --c-background: hsl(0, 0%, 100%);
  --c-body: hsl(0, 0%, 20%);
  --c-body-secondary: hsl(0, 0%, 60%);
  --c-button: hsla(0, 0%, 0%, 0.08);
  --c-buttonHover: hsla(0, 0%, 0%, 0.15);
  --c-buttonActive: hsla(0, 0%, 0%, 0.2);
  --c-fade: hsla(0, 0%, 0%, 0.4);
  --c-backgroundAlt: hsla(0, 0%, 0%, 0.07);
  --c-backgroundCode: hsla(0, 0%, 0%, 0.05);
`;

const BaseStyles = createGlobalStyle`
  :root {
    ${cssVariables}
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    background-color: var(--c-background);
    color: var(--c-body);
    font-family: "SF Mono", SFMono-Regular, ui-monospace, "DejaVu Sans Mono",
      Menlo, Consolas, monospace;
    font-weight: normal;
    font-size: 0.875rem;
    line-height: 1.5;
  }

  a {
    color: inherit;
    font-weight: 600;
  }
`;

export default BaseStyles;
