import React from "react";

import { Container, Title, Date, Episode } from "./styles";

export interface EpisodesProps {
  id?: number;
  name: string;
  air_date: string;
  episode: string;
}

export function EpisodeCard({ name, air_date, episode }: EpisodesProps) {
  return (
    <Container>
      <Title>Name: {name}</Title>
      <Date>Air Date: {air_date}</Date>
      <Episode>Episode: {episode}</Episode>
    </Container>
  );
}
