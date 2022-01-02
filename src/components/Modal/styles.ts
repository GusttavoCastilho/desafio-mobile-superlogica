import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
  position: relative;
`;

export const BoxModal = styled.View`
  width: 90%;
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: 20px;
  padding: 35px;
  align-items: center;
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const Content = styled.View`
  padding-top: 10px;
`;

export const Divider = styled.View`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.dark_light};
  margin-top: 10px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
  font-weight: bold;
`;

export const ButtonClose = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
`;

export const ButtonFavorite = styled.TouchableOpacity`
  height: 30px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.dark_light};
  border-radius: 10px;
  flex-direction: row;
`;
