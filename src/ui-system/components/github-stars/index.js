import React, { useEffect, useState } from "react";
import styled from "styled-components";

const GitHubStarsWrapper = styled.div`
  b {
    font-family: auto;
    font-size: 1em;
    position: relative;
    top: -1px;
    margin-right: 3px;
  }
`;

const GitHubStars = ({ user, repo }) => {
  const [stars, setStars] = useState(null);
  const formattedStars = Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(stars);

  useEffect(() => {
    const fetchGitHubStars = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${user}/${repo}`
        );
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error("Error fetching GitHub stars:", error);
      }
    };

    fetchGitHubStars();
  }, [user, repo]);

  return (
    <GitHubStarsWrapper>
      <b>★</b>
      {stars !== null ? formattedStars : "-.-"}
    </GitHubStarsWrapper>
  );
};

export default GitHubStars;
