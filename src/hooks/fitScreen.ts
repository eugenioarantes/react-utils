import { useEffect, useState, useRef, useCallback } from 'react';

const ZERO = 0;

interface FitScreenOptions {
  adjust?: boolean;
  bottomDistance: number;
  safeValueReduction?: number;
  defaultValue?: number;
  direction?: 'top' | 'left';
}

export function useFitScreen<El>({
  bottomDistance,
  adjust = true,
  defaultValue,
  direction = 'top',
}: FitScreenOptions): [number, (node: (El & HTMLElement) | null) => void, () => void] {
  const ref = useRef<(El & HTMLElement) | null>(null);
  const [resizes, setResizes] = useState(ZERO);
  const [containerMaxHeight, setContainerMaxHeight] = useState(defaultValue || ZERO);

  const calculateHeight = useCallback(() => {
    if (!ref.current) return;

    const reduceMeasure = bottomDistance + ref.current.getBoundingClientRect()[direction];

    const maxHeight = window.innerHeight - reduceMeasure;

    setContainerMaxHeight(maxHeight);
  }, [bottomDistance, ref, direction]);

  useEffect(() => {
    if (!ref.current || !adjust) return;

    calculateHeight();
  }, [ref, adjust, resizes, calculateHeight]);

  useEffect(() => {
    const updateResizeCount = (): void => setResizes((old) => old + 1);

    window.addEventListener('resize', updateResizeCount);

    return () => window.addEventListener('resize', updateResizeCount);
  }, []);

  const setRef = useCallback(
    (node: (El & HTMLElement) | null) => {
      if (!node) return;

      ref.current = node;

      calculateHeight();
    },
    [calculateHeight],
  );

  return [containerMaxHeight, setRef, calculateHeight];
}
