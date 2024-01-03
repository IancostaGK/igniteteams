import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray600};
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 32px;
`;
