import React from "react";
import { Container, Input, Button } from "./styles";

import Feather from "@expo/vector-icons/Feather";
import { useTheme } from "styled-components";

interface SearchProps {
  onChangeText: (text: string) => void;
  value: string;
}

const Search: React.FC<SearchProps> = ({ onChangeText, value }) => {
  const theme = useTheme();
  return (
    <Container>
      <Input
        placeholderTextColor={theme.colors.gray}
        placeholder="Search Name Character"
        value={value}
        onChangeText={onChangeText}
      />
      <Button>
        <Feather name="search" size={18} color={theme.colors.gray} />
      </Button>
    </Container>
  );
};

export default Search;
