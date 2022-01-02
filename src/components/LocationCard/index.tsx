import React from "react";

import { Container, Title, TextType, Dimension } from "./styles";

export interface LocationCardProps {
  id?: number;
  name: string;
  type: string;
  dimension: string;
}

export function LocationCard({ name, type, dimension }: LocationCardProps) {
  return (
    <Container>
      <Title>Name: {name}</Title>
      <TextType>Type: {type}</TextType>
      <Dimension>{dimension}</Dimension>
    </Container>
  );
}
