import { useState, useCallback, Dispatch, SetStateAction, useMemo } from 'react';

export interface ToggleHandlers {
  toggle: () => void;
  turnOn: () => void;
  turnOff: () => void;
  setIsOn: Dispatch<SetStateAction<boolean>>;
}

export function useToggleV2(defaultState = false): [boolean, ToggleHandlers] {
  const [isOn, setIsOn] = useState(defaultState);

  const toggle = useCallback(() => setIsOn((pastVisibility) => !pastVisibility), []);

  const turnOn = useCallback(() => setIsOn(true), []);

  const turnOff = useCallback(() => setIsOn(false), []);

  const handlers = useMemo(
    () => ({
      toggle,
      turnOn,
      setIsOn,
      turnOff,
    }),
    [toggle, turnOn, turnOff],
  );

  return [isOn, handlers];
}
