import { useState, useEffect } from 'react';

interface HookState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

export const usePosts = <T extends unknown[] | object>(url: string): HookState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data: T = await res.json();
        setData(data);
      } catch (err) {
        console.error('Error fetching data:', err);
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};
