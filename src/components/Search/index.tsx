import React from "react";
import { Container, Input, Button } from "./styles";

import Feather from "@expo/vector-icons/Feather";
import { useTheme } from "styled-components";
import {
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from "react-native";

interface SearchProps {
  onChangeText: (text: string) => void;
  value: string;
  onSubmitEditing?:
    | ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void)
    | undefined;
}

const Search: React.FC<SearchProps> = ({
  onChangeText,
  value,
  onSubmitEditing,
}) => {
  const theme = useTheme();
  return (
    <Container>
      <Input
        placeholderTextColor={theme.colors.gray}
        placeholder="Search Name Character"
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
      <Button>
        <Feather name="search" size={18} color={theme.colors.gray} />
      </Button>
    </Container>
  );
};

export default Search;
