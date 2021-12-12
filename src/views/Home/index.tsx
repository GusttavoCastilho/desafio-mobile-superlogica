import React, { useState, useEffect, useCallback } from "react";
import { FlatList, StatusBar, Modal } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Ionicons from "@expo/vector-icons/Ionicons";

import { useTheme } from "styled-components";

import Search from "../../components/Search";
import CardItem from "../../components/CardItem";
import ModalComponent from "../../components/Modal";

import { Character } from "../../DTO/characterDTO";

import { Container, WrapperHeader, Content, TextRick } from "./styles";

import {
  getAllCharacter,
  searchCharacter,
} from "../../store/modules/Character/reducers";
import { RootState } from "../../store";

const Home: React.FC = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [infoModal, setInfoModal] = useState<Character>({} as Character);
  const [search, setSearch] = useState("");

  const { character, currentPage, fullPage } = useSelector(
    (state: RootState) => state.character
  );

  useEffect(() => {
    dispatch(getAllCharacter());
  }, []);

  const handleInputSearch = useCallback(() => {
    dispatch(searchCharacter({ search: search }));
  }, [search]);

  const handlePaginate = useCallback(() => {
    if (currentPage <= fullPage) dispatch(getAllCharacter());
  }, [fullPage, currentPage]);

  function showModal(item: Character) {
    setInfoModal(item);
    setModalVisible(true);
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <WrapperHeader>
        <Search
          value={search}
          onChangeText={(search) => setSearch(search)}
          onSubmitEditing={handleInputSearch}
        />
        <Ionicons name="filter" size={24} color={theme.colors.gray} />
      </WrapperHeader>

      <Content>
        <TextRick>List Character</TextRick>

        <FlatList
          data={character}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CardItem
              //@ts-ignore
              onPress={() => showModal(item)}
              name={item.name}
              image={item.image}
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          contentContainerStyle={{ paddingBottom: 200 }}
          onEndReached={handlePaginate}
        />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <ModalComponent
            id={infoModal.id}
            image={infoModal.image}
            name={infoModal.name}
            species={infoModal.species}
            status={infoModal.status}
            onPress={() => setModalVisible(!modalVisible)}
          />
        </Modal>
      </Content>
    </Container>
  );
};

export default Home;
