import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 70px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Date = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const Episode = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
`;
