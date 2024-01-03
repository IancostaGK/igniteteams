import { Header } from '@components/header';
import { Hightlight } from '@components/highlight';
import { Container } from './styles';

export function Groups() {
  return (
    <Container>
      <Header></Header>
      <Hightlight title="Turmas" subtitle="Jogue com a sua turma" />
    </Container>
  );
}
