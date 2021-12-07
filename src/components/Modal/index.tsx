import React from "react";
import { GestureResponderEvent } from "react-native";
import {
  BoxModal,
  Container,
  Text,
  Image,
  Content,
  ButtonClose,
} from "./styles";

import AntDesign from "@expo/vector-icons/AntDesign";
import { useTheme } from "styled-components";

interface ModalProps {
  onPress: (event: GestureResponderEvent) => void;
  name: string;
  species: string;
  status: string;
  image: string;
}

const Modal: React.FC<ModalProps> = ({
  onPress,
  name,
  species,
  status,
  image,
}) => {
  const theme = useTheme();
  return (
    <Container>
      <BoxModal>
        <Image source={{ uri: image }} resizeMode="contain" />
        <Content>
          <Text>Name: {name}</Text>
          <Text>Species: {species}</Text>
          <Text>Status: {status}</Text>
        </Content>
        <ButtonClose onPress={onPress}>
          <AntDesign name="closecircleo" size={32} color={theme.colors.gray} />
        </ButtonClose>
      </BoxModal>
    </Container>
  );
};

export default Modal;
