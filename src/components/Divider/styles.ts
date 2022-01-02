import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 1px;

  margin-bottom: 10px;

  background-color: ${({ theme }) => theme.colors.dark_light};
`;
