import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray600};
  align-items: center;
  padding: 8px 16px;
`;
