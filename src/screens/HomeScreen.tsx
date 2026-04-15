import {
  Alert,
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { delPost, getPosts, upPost } from "../api/api";
import Ionicons from "@expo/vector-icons/Ionicons";
import AddPostScreen from "./AddPostScreen";

const HomeScreen = () => {
  const [bookData, setBookData] = useState({});
  const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);


  const fetchPosts = () => {
    getPosts({
      onSuccess: (posts) => {
        setBookData(posts);
      },
      onError: (err) => {
        Alert.alert("Error!", err);
      },
    });
  };

  const deletePost = (item) => {
    delPost({
      onError: (err) => {
        Alert.alert("Error", err);
      },
      onSuccess: () => {
        fetchPosts();
      },
      itemID: item.id,
    });
  };

  const updatePost = (item) => {
    upPost({
      onError: (err) => {
        Alert.alert("Error", err);
      },
      onSuccess: () => {
            setShowModal(true);
      setSelectedItem(item);
      },
      itemID: item.id,
      body: {},
    });
  };

  useEffect(() => {
    fetchPosts();
  }, [!showModal]);

  return (
    <SafeAreaView>
      <FlatList
        data={bookData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostCard
            title={item?.title}
            description={item?.description}
            image={item?.image}
            onDeleteTap={() => deletePost(item)}
            onEditTap={() => updatePost(item)}
          />
        )}
      ></FlatList>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => setShowModal(true)}>
          <Ionicons name="add-circle" size={50} color="#000" />
        </TouchableOpacity>
        <Modal visible={showModal} animationType="slide">
          <AddPostScreen
            onCloseScreenPress={() => {
              setShowModal(false);
              setSelectedItem(null);
            }}
            onCreateSuccess={() => fetchPosts()}
            selectedItem={selectedItem}
          />
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    right: 30,
    backgroundColor: "#fff",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    zIndex: 1,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  closeButton: { position: "absolute", right: 20, top: 60 },
});
