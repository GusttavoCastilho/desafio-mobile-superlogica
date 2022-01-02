import React, { useState, useEffect, useCallback } from "react";
import { ActivityIndicator, FlatList } from "react-native";

import { useTheme } from "styled-components/native";

import api from "../../services/api";

import { EpisodeCard, EpisodesProps } from "../../components/EpisodeCard";
import { Divider } from "../../components/Divider";

import { Container, Title } from "./styles";

const Episodes: React.FC = () => {
  const [episodes, setEpisodes] = useState<EpisodesProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const theme = useTheme();

  useEffect(() => {
    async function loadLocations() {
      try {
        setIsLoading(true);
        const { data } = await api.get(`/episode?&page=${currentPage}`);
        setEpisodes([...episodes, ...data.results]);
        setIsLoading(false);
      } catch {
        setIsLoading(false);
      }
    }

    loadLocations();
  }, [currentPage]);

  const handlePaginate = useCallback(() => {
    if (!isLoading) {
      setCurrentPage((oldState) => oldState + 1);
    }
  }, [isLoading, currentPage]);

  const listFooter = () => {
    return isLoading ? (
      <ActivityIndicator size="large" color={theme.colors.gray} />
    ) : null;
  };
  return (
    <Container>
      <Title>Episodes</Title>
      <FlatList
        onEndReached={handlePaginate}
        ListFooterComponent={listFooter}
        ItemSeparatorComponent={Divider}
        data={episodes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <EpisodeCard
            name={item.name}
            air_date={item.air_date}
            episode={item.episode}
          />
        )}
        contentContainerStyle={{
          marginTop: 20,
        }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Episodes;
