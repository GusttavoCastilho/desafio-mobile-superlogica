import React, { useState } from "react";

import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { useTheme } from "styled-components";
import { Wrapper, FavoriteBox, NumberFavorite, TextNumber } from "./styles";

interface FavoriteProps {
  quantity: number;
  onFavorite: () => void;
  onClose: () => void;
}

const Favorite: React.FC<FavoriteProps> = ({
  quantity,
  onFavorite,
  onClose,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const theme = useTheme();

  return (
    <Wrapper>
      {isFavorite ? (
        <Ionicons
          name="close"
          size={24}
          color={theme.colors.gray}
          onPress={() => {
            onClose();
            setIsFavorite(!isFavorite);
          }}
        />
      ) : (
        <FavoriteBox>
          {quantity > 0 && (
            <NumberFavorite>
              <TextNumber>{quantity}</TextNumber>
            </NumberFavorite>
          )}
          <MaterialIcons
            name="favorite"
            size={24}
            color={theme.colors.gray}
            onPress={() => {
              onFavorite();
              setIsFavorite(!isFavorite);
            }}
          />
        </FavoriteBox>
      )}
    </Wrapper>
  );
};

export default Favorite;
