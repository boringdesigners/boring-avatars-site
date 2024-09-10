import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Playground from "./playground";
import Examples from "./examples";
import Readme from "./readme";
import { BaseStyles } from "./ui-system";
import styled from "styled-components";

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--sp-l);
  margin: 2rem 0 4rem;
  flex-wrap: wrap;

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    gap: var(--sp-m);
    justify-content: center;
  }

  a {
    font-weight: 700;
  }
`;

const App = () => (
  <>
    <BaseStyles />
    <Router>
      <Navigation>
        <ul>
          <li>
            <Link to="/">Readme</Link>
          </li>
          <li>
            <Link to="/playground">Playground</Link>
          </li>
          <li>
            <Link to="/examples">Examples</Link>
          </li>
        </ul>
      </Navigation>
      <Routes>
        <Route path="/" element={<Readme />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/examples" element={<Examples />} />
      </Routes>
    </Router>
  </>
);

export default App;
