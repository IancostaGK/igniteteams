import { ColorValue, TextInput } from 'react-native';
import styled from 'styled-components';

export const Container = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.gray300 as ColorValue,
}))`
  flex: 1;
  width: 100%;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray700};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  padding: 16px;
`;
