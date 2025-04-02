'use client';

import { useEffect, useState } from 'react';

interface GitHubStarsProps {
  user: string;
  repo: string;
}

export function GitHubStars({ user, repo }: GitHubStarsProps) {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${user}/${repo}`)
      .then((res) => res.json())
      .then((data) => {
        setStars(data.stargazers_count);
      })
      .catch(() => {
        setStars(null);
      });
  }, [user, repo]);

  if (stars === null) return null;

  return <span>⭐ {stars.toLocaleString()}</span>;
}
