import Container from '@/components/Container';
import Leaderboard from '@/components/Leaderboard';
import Navigation from '@/components/Navigation/Navigation';

export default function leaderboards() {
  return (
    <>
      <Navigation />
      <Container>
        <Leaderboard />
      </Container>
    </>
  );
}
