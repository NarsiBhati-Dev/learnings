import { useRef } from "react";

export function useDebounce(callback) {
  let clock = useRef();

  function timer() {
    clearTimeout(clock.current);
    clock.current = setTimeout(() => callback(), 2000);
  }

  return timer;
}
