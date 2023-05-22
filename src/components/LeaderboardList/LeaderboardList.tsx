import { useProfiles } from '@/services/profileService';
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import {
  LeaderboardBodyHolder,
  LeaderboardBodyWrapper,
  LeaderboardDivider,
  LeaderboardHeading,
  LeaderboardHeadingWrapper,
  LeaderboardText,
  LeaderboardWrapper,
} from './styled';
export default function LeaderboardList() {
  const { profiles } = useProfiles();
  const [sortedProfiles, setSortedProfiles] = useState(profiles);
  useEffect(() => {
    setSortedProfiles(profiles);
  }, [profiles]);

  const sortByScore = () => {
    setSortedProfiles((currSortedProfiles) =>
      [...currSortedProfiles].sort((a, b) => b.points - a.points),
    );
  };

  const sortByName = () => {
    setSortedProfiles((currSortedProfiles) =>
      [...currSortedProfiles].sort((a, b) => a.name.localeCompare(b.name)),
    );
  };

  return (
    <>
      <LeaderboardWrapper>
        <LeaderboardHeadingWrapper>
          <LeaderboardHeading onClick={sortByName}>Player</LeaderboardHeading>
          <LeaderboardHeading onClick={sortByScore}>Points</LeaderboardHeading>
        </LeaderboardHeadingWrapper>
        <LeaderboardBodyWrapper>
          {sortedProfiles.map((profile) => {
            return (
              <LeaderboardBodyHolder key={uuid()}>
                <LeaderboardDivider>
                  <LeaderboardText>{profile.name}</LeaderboardText>
                </LeaderboardDivider>
                <LeaderboardDivider>
                  <LeaderboardText>{profile.points}</LeaderboardText>
                </LeaderboardDivider>
              </LeaderboardBodyHolder>
            );
          })}
        </LeaderboardBodyWrapper>
      </LeaderboardWrapper>
    </>
  );
}
