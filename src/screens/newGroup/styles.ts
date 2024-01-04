import { UsersThree } from 'phosphor-react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray600};
`;

export const Content = styled.View`
  align-items: center;
  height: 92%;
  justify-content: center;
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: theme.colors.green700,
}))``;
