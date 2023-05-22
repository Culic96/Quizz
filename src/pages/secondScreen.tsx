import Container from '@/components/Container';
import GamePicker from '@/components/GamePicker/GamePicker';
import Navigation from '@/components/Navigation/Navigation';

export default function secondScreen() {
  return (
    <>
      <Navigation />
      <Container>
        <GamePicker />
      </Container>
    </>
  );
}
