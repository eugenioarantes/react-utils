import { ChangeEvent, Dispatch, useCallback, useReducer } from 'react';

type OrUpdater<State, T> = T | ((old: State) => T);

type UpdateState<State> = { [key in keyof State]?: OrUpdater<State, State[key]> };

export type FormControlDispatchAction<DefaultValues> = Dispatch<UpdateState<DefaultValues>>;

// eslint-disable-next-line @typescript-eslint/ban-types
function executeMergeUpdate<State extends object>(
  state: State,
  action: Partial<UpdateState<State>>,
): State {
  const updatedState = Object.fromEntries(
    Object.entries(action).map(([key, value]) => {
      const updated = typeof value === 'function' ? value(state) : value;

      return [key, updated];
    }),
  );

  return {
    ...state,
    ...updatedState,
  } as State;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function resolveState<State extends object>(
  state: State,
  action: Partial<UpdateState<State>>,
): State {
  const noChange = Object.entries(action).every(
    ([key, value]) => state[key as keyof State] === value,
  );

  if (noChange) return state;

  return executeMergeUpdate(state, action);
}

export type FormControlHook<DefaultValues> = {
  state: DefaultValues;
  dispatch: Dispatch<UpdateState<DefaultValues>>;
  resetDefault: () => void;

  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export function useFormControl<DefaultValues extends object>(
  defaultValues: DefaultValues,
): FormControlHook<DefaultValues> {
  const [state, dispatch] = useReducer(resolveState, defaultValues);

  const handleChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { id, name, value } = target;
      dispatch({
        [id || name]: value,
      });
    },
    [],
  );

  const resetDefault = useCallback(() => {
    dispatch(defaultValues);
  }, [defaultValues]);

  return {
    state,
    dispatch,
    handleChange,
    resetDefault,
  } as FormControlHook<DefaultValues>;
}
