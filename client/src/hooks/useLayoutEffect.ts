import { useLayoutEffect, useRef } from 'react';

export function useLayoutUpdateEffect(effect: () => void, deps?: unknown[]): void {
  const firstRenderRef = useRef(true);

  useLayoutEffect(() => {
    if (!firstRenderRef.current) {
      return effect();
    }
  }, deps);

  useLayoutEffect(() => {
    firstRenderRef.current = false;

    return () => {
      firstRenderRef.current = true;
    };
  }, []);
}
