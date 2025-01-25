import { useState, useEffect } from "react";

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    // Initial state set based on current media query match
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const media = window.matchMedia(query);

    // Handler to update matches state
    const listener = (e) => {
      setMatches(e.matches);
    };

    // Add event listener using modern method
    media.addEventListener("change", listener);

    // Clean up listener
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
