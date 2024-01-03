import { CaretLeft } from 'phosphor-react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray600};
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.colors.white,
}))``;
