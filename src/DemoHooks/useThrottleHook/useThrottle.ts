import { useCallback, useRef } from "react";

const useThrottle = (fn: Function, delay = 500): Function => {
  const ref = useRef({ fn, timer: -1 });

  return useCallback(
    (...args) => {
      let {
        current: { timer, fn },
      } = ref;
      if (timer < 0) {
        ref.current.timer  = window.setTimeout(() => {
          ref.current.timer = -1;
        }, delay);
        fn.call(this, ...args);
      }
    },
    [delay]
  );
};

export default useThrottle;
