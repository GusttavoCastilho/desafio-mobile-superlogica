import React, { useCallback, useState } from "react";
import { GestureResponderEvent } from "react-native";
import {
  BoxModal,
  Container,
  Text,
  Image,
  Content,
  ButtonClose,
  Divider,
  ButtonFavorite,
} from "./styles";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useTheme } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { addNewFavoriteCharacter } from "../../store/modules/Favorite/reducers";
import { Character } from "../../DTO/characterDTO";

interface ModalProps {
  onPress: (event: GestureResponderEvent) => void;
  items: Character;
}

const Modal: React.FC<ModalProps> = ({ onPress, items }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const { favorite } = useSelector((state: RootState) => state.favorite);

  const handleFavorite = useCallback(() => {
    dispatch(addNewFavoriteCharacter(items));
    setIsFavorite(true);
  }, [favorite]);

  return (
    <Container>
      <BoxModal>
        <Image source={{ uri: items.image }} resizeMode="contain" />
        <Divider />
        <Content>
          <Text>Name: {items.name}</Text>
          <Text>Species: {items.species}</Text>
          <Text>Status: {items.status}</Text>
          <Text>Genter: {items.gender}</Text>
          <ButtonFavorite onPress={handleFavorite}>
            {isFavorite ? (
              <>
                <Text>Remover</Text>
                <AntDesign
                  name="delete"
                  size={20}
                  color={theme.colors.red}
                  style={{ marginLeft: 10 }}
                />
              </>
            ) : (
              <>
                <Text>Favorite</Text>
                <MaterialIcons
                  name="favorite-outline"
                  size={20}
                  color={theme.colors.gray}
                  style={{ marginLeft: 10 }}
                />
              </>
            )}
          </ButtonFavorite>
        </Content>
        <ButtonClose onPress={onPress}>
          <AntDesign name="closecircleo" size={32} color={theme.colors.gray} />
        </ButtonClose>
      </BoxModal>
    </Container>
  );
};

export default Modal;
