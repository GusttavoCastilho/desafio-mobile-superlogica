import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.bg};

  padding: ${getStatusBarHeight() + 30}px 24px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: bold;
`;
