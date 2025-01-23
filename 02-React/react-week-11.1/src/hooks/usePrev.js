import { useEffect, useRef } from "react";

const usePrev = (value) => {
  const prev = useRef();

  useEffect(() => {
    prev.current = value;
  });

  return prev.current;
};

export { usePrev };
