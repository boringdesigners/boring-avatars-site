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

  --font-monospace: "SF Mono", SFMono-Regular, ui-monospace, "DejaVu Sans Mono",
    Menlo, Consolas, monospace;
  --font-sans: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
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
    font-family: var(--font-monospace);
    font-weight: normal;
    font-size: 0.875rem;
    line-height: 1.5;
  }

  a {
    color: inherit;
    font-weight: 600;
  }

  h1 {
    font-size: 1.4rem;
    line-height: 1.2;
  }

  h2 {
    font-size: 1.25rem;
    line-height: 1.2;
  }

  h3 {
    font-size: 0.9rem;
    line-height: 1.2;
  }

  .card {
    box-shadow: 0 0 0 1px rgba(50, 50, 93, 0.01),
    0 7px 14px 0 rgba(50, 50, 93, 0.05), 0 3px 6px 0 rgba(0, 0, 0, 0.02);
    border-radius: 0.75rem;
    background-color: var(--c-background);
    overflow: hidden;
  }

  pre {
    width: 100%;
    display: block;
    padding: var(--sp-s) var(--sp-m);
    border-radius: 0.25rem;
    background-color: var(--c-backgroundCode);
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    white-space: break-spaces;

    & + h2,
    & + h3,
    & + h4 {
      margin-top: var(--sp-xl);
    }
}
`;

export default BaseStyles;
