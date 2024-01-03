import LogoImg from '@assets/logo.png';
import { BackButton, BackIcon } from '@screens/groups/styles';
import { Container, Logo } from './styles';

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={LogoImg} />
    </Container>
  );
}
