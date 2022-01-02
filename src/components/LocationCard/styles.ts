import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 70px;

  margin-bottom: 5px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
`;

export const TextType = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const Dimension = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
`;
