import React, { useState, useEffect, useCallback } from "react";

import { FlatList, Alert, ActivityIndicator } from "react-native";

import { useTheme } from "styled-components/native";

import { LocationCard, LocationCardProps } from "../../components/LocationCard";

import api from "../../services/api";

import { Container, Title } from "./styles";

const Locations: React.FC = () => {
  const [location, setLocation] = useState<LocationCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const theme = useTheme();

  useEffect(() => {
    async function loadLocations() {
      try {
        setIsLoading(true);
        const { data } = await api.get(`/location?&page=${currentPage}`);
        setLocation([...location, ...data.results]);
        setIsLoading(false);
      } catch {
        Alert.alert("Error", "An error occurred loading locations.");
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
      <Title>Locations</Title>
      <FlatList
        onEndReached={handlePaginate}
        ListFooterComponent={listFooter}
        data={location}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <LocationCard
            name={item.name}
            type={item.type}
            dimension={item.dimension}
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

export default Locations;
