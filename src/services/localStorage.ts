import { useCallback } from 'react';

export function useLocalStorage() {
  const setItemToLocalStorage = useCallback((key: string, item) => {
    return localStorage.setItem(key, String(item));
  }, []);

  const getItemFromLocalStorage = useCallback(<T>(item: string): T | null => {
    return (JSON.parse(localStorage.getItem(item) || '[]') as T) || null;
  }, []);

  const pullLocalStorage = () => {
    // const profile: Profile = {
    //   name: getItemFromLocalStorage('user'),
    //   points: getItemFromLocalStorage('score'),
    // };
    // setItemToLocalStorage('profile', JSON.stringify([...profiles, profile]));
    // setProfiles((prevProfiles) => [...prevProfiles, profile]);
  };

  return {
    setItemToLocalStorage,
    getItemFromLocalStorage,
    pullLocalStorage,
  };
}
