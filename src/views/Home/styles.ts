import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export const WrapperHeader = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 40px;
`;

export const Content = styled.View`
  width: 100%;
  padding: 20px 24px 0 16px;
`;

export const TextRick = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: bold;
  padding: 0 0 10px 10px;
`;

export const TextEmpty = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.red};
`;
