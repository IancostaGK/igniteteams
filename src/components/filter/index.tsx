import { TouchableOpacityProps } from 'react-native';
import { Container, FilterStyleProps, Title } from './styles';

type Props = TouchableOpacityProps &
  FilterStyleProps & {
    isActive: boolean;
    title: string;
  };

export function Filter({ isActive, title, ...props }: Props) {
  return (
    <Container isActive={isActive} {...props}>
      <Title>{title}</Title>
    </Container>
  );
}
