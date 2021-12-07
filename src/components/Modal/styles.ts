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
  background-color: ${({ theme }) => theme.colors.dark_light};
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
  padding-top: 20px;
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
  /* background-color: red; */
`;
