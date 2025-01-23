import { useEffect, useRef, useState } from "react";

const useDebounce = (value, delay) => {
  let clock = useRef();
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    clock.current = setTimeout(() => setDebounceValue(value), delay);

    return () => {
      clearTimeout(clock.current);
    };
  }, [value]);

  return debounceValue;
};

export default useDebounce;
