import { useCallback, useRef, useEffect } from "react";

const useDebounce = (fn: Function, delay: number = 500): Function => {
  // 缓存 timer
  const ref = useRef({ timer: -1, fn });

  useEffect(() => {
    ref.current.fn = fn;
  }, [fn]);

  return useCallback(
    (...args) => {
      const { current } = ref;
      if (current.timer) {
        window.clearTimeout(current.timer);
      }
      const { fn } = current;
      current.timer = window.setTimeout(() => {
        fn.call(null, ...args);
      }, delay);
    },
    [delay]
  );
};

export default useDebounce;
