import { useEffect, useRef } from 'react';

// const isDev = import.meta.env.MODE === 'development';
const isDev = true;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useOldEffect(callback: () => void, dependencies: any[]): void {
  const rendered = useRef(false);

  useEffect(() => {
    if (!isDev) return callback();

    if (rendered.current) return;

    const result = callback();

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (result as any)?.();

      rendered.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}
