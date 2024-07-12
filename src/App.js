import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Playground from "./playground";
import Readme from "./readme";
import { BaseStyles } from "./ui-system";
import styled from "styled-components";

const Navigation = styled.nav`
  margin: 2rem 0 4rem;

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    gap: 1rem;
    justify-content: center;
  }

  a {
    font-weight: 700;
  }
`;

const App = () => (
  <Router>
    {/* <Navigation>
      <ul>
        <li>
          <Link to="/">Readme</Link>
        </li>
        <li>
          <Link to="/playground">Playground</Link>
        </li>
      </ul>
    </Navigation> */}
    <Routes>
      <Route path="/" element={<Readme />} />
      <Route path="/playground" element={<Playground />} />
    </Routes>
  </Router>
);

export default App;
