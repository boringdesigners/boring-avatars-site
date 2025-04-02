'use client';

import { useEffect, useState } from 'react';

export const GitHubStars = ({ user, repo }: { user: string; repo: string }) => {
  const [stars, setStars] = useState(0);

  const formattedStars = Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1
  }).format(stars);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${user}/${repo}`)
      .then((res) => res.json())
      .then((data) => {
        setStars(data.stargazers_count);
      })
      .catch((error) => {
        console.error('Error fetching GitHub stars:', error);
      });
  }, [user, repo]);

  return (
    <div className="githubStars">
      <b>★</b>
      {stars !== null ? formattedStars : '-.-'}
    </div>
  );
};
