import { useState, useCallback, useEffect } from 'react';
import api from '../services/api';

interface UseEntityLoad<Entity> {
  data: Entity;
  loading: boolean;
  error: boolean;
  retry: () => Promise<void>;
  overwrite: (newData: Entity) => void;
}

interface LoadOptions<Entity> {
  query?: Record<string, string>;
  blockLoad?: boolean;
  onLoad?: (entity: Entity) => void;
  defaultValue?: Entity;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useEntitiesLoad<Entity = any>(
  path: string,
  { blockLoad, query, onLoad, defaultValue }: LoadOptions<Entity> = {},
): UseEntityLoad<Entity> {
  const [loading, setLoading] = useState(!blockLoad);
  const [error, setError] = useState(false);

  const [data, setData] = useState<Entity>(defaultValue as Entity);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);

      const result = await api.get<Entity>(path, {
        params: query,
      });

      setData(result.data);
      onLoad?.(result.data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [path, query, onLoad]);

  useEffect(() => {
    if (blockLoad) return;

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blockLoad]);

  return {
    loading,
    error,
    data: data as Entity,
    retry: load,
    overwrite: setData,
  };
}
