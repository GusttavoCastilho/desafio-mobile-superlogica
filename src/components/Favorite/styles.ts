import styled from "styled-components/native";

export const Wrapper = styled.View`
  position: relative;
`;

export const FavoriteBox = styled.View``;

export const NumberFavorite = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.dark};

  position: absolute;
  bottom: 20px;
  right: -5px;

  align-items: center;
  justify-content: center;
`;

export const TextNumber = styled.Text`
  color: ${({ theme }) => theme.colors.gray};
`;
