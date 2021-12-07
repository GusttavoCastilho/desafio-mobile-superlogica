import React from "react";
import { GestureResponderEvent } from "react-native";
import { Container, Name, Image } from "./styles";

interface CardItemProps {
  name: string;
  image: string;
  onPress: (event: GestureResponderEvent) => void;
}

const CardItem: React.FC<CardItemProps> = ({ name, image, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Image source={{ uri: image }} resizeMode="contain" />
      <Name>{name}</Name>
    </Container>
  );
};

export default CardItem;
