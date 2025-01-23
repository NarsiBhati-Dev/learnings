import { useEffect, useRef } from "react";

const usePrevious = (value) => {
  const preciousValue = useRef(value);

  useEffect(() => {
    preciousValue.current = value;
  }, [value]);

  return preciousValue.current;
};

export default usePrevious;
