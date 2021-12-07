import styled from "styled-components/native";

export const Container = styled.View`
  width: 70%;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: 12px;
`;

export const Input = styled.TextInput`
  width: 80%;
  padding-left: 10px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
