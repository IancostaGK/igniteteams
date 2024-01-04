import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray600};
`;

export const Content = styled.View`
  align-items: center;
  height: 100%;
  justify-content: center;
`;

export const Form = styled.View`
  width: 90%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.gray700};
  flex-direction: row;
  border-radius: 6px;
`;
