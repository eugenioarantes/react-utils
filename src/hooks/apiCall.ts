/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from 'axios';
import { useState, useCallback } from 'react';
import api from '../services/api';

export type ApiError = {
  message: string;
};

interface ExecuteProps {
  method?: 'post' | 'put';
  path: string;
  payload: Record<string, any>;
  customErrorParser?: (errorResponse: ApiError) => void;
}

type MappedObject<E extends string> = { [key in E]: boolean };

type UseEntityLoad<L extends string = 'loading', E extends string = 'error'> = {
  executeApiCall<Result = any>(params: ExecuteProps): Promise<Result | undefined>;
} & MappedObject<L> &
  MappedObject<E>;

interface HookParams<L extends string = 'loading', E extends string = 'error'> {
  variableConfig?: {
    loading?: L;
    error?: E;
  };
}

const defaultVariableConfig = {
  loading: 'loading',
  error: 'error',
} as const;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useApiCall<L extends string = 'loading', E extends string = 'error'>(
  { variableConfig = defaultVariableConfig as { loading: L; error: E } }: HookParams<L, E> = {
    variableConfig: defaultVariableConfig as { loading: L; error: E },
  },
): UseEntityLoad<L, E> {
  const { loading, error } = variableConfig;

  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const executeApiCall = useCallback(
    async <Result = any>({ method = 'post', path, payload, customErrorParser }: ExecuteProps) => {
      try {
        setLoading(true);

        const result = await api[method]<Result>(path, payload);

        setLoading(false);

        return result.data;
      } catch (err) {
        setError(true);
        customErrorParser?.(((err as AxiosError).response?.data as ApiError) || {});
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return {
    [loading || 'loading']: isLoading,
    [error || 'error']: isError,
    executeApiCall,
  } as UseEntityLoad<L, E>;
}
