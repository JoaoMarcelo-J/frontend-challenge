import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(() => {
    if (process.browser) {
      const storageValue = localStorage.getItem(key);
      if (storageValue) {
        return JSON.parse(storageValue);
      } else {
        return initialState;
      }
    }
  });

  useEffect(() => {
    if (process.browser) {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
