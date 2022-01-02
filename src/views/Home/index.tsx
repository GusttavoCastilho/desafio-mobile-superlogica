import React, { useState, useEffect, useCallback } from "react";
import { FlatList, StatusBar, Modal } from "react-native";
import { useDispatch, useSelector } from "react-redux";

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
import Favorite from "../../components/Favorite";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [infoModal, setInfoModal] = useState<Character>({} as Character);
  const [search, setSearch] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const { character, currentPage, fullPage } = useSelector(
    (state: RootState) => state.character
  );
  const { favorite } = useSelector((state: RootState) => state.favorite);
  console.log(favorite);
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
        <Favorite
          quantity={favorite.length}
          onFavorite={() => setIsFavorite(true)}
          onClose={() => setIsFavorite(false)}
        />
      </WrapperHeader>

      <Content>
        <TextRick>List Character</TextRick>

        <FlatList
          data={isFavorite ? favorite : character}
          keyExtractor={(item) => String(item.id)}
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
            items={infoModal}
            onPress={() => setModalVisible(!modalVisible)}
          />
        </Modal>
      </Content>
    </Container>
  );
};

export default Home;
