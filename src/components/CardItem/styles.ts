import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 45%;
  height: 180px;
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: 8px;
  align-items: center;
  padding: 10px 0 10px 0;
  margin: 10px;
`;

export const Image = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 10px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
  font-weight: bold;
  padding-top: 10px;
`;
