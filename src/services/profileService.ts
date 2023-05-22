import { useCallback, useEffect, useState } from 'react';
import { useLocalStorage } from './localStorage';

export interface Profile {
  name: string;
  points: number;
}

export function useProfiles() {
  const { getItemFromLocalStorage, setItemToLocalStorage } = useLocalStorage();
  const [profiles, setProfiles] = useState([] as Profile[]);

  useEffect(() => {
    const localProfiles = getItemFromLocalStorage<Profile[]>('profiles');
    setProfiles(localProfiles || []);

    console.log('[useProfiles]', { localProfiles });
  }, [getItemFromLocalStorage]);

  const setNewProfile = useCallback(
    (name: string, points: number) => {
      const existingProfile = profiles.filter(
        (profile) => profile.name === name,
      );
      let updatedProfiles = [] as Profile[];

      if (existingProfile.length) {
        updatedProfiles = profiles.map((profile) => {
          if (profile.name === name) {
            return {
              name,
              points: profile.points + points,
            };
          }

          return profile;
        }) as Profile[];
      } else {
        updatedProfiles = [...profiles, { name, points }] as Profile[];
      }

      console.log({ updatedProfiles });

      setProfiles(updatedProfiles);
      setItemToLocalStorage('profiles', JSON.stringify(updatedProfiles));
    },
    [profiles, setItemToLocalStorage],
  );

  return { profiles, setNewProfile };
}
