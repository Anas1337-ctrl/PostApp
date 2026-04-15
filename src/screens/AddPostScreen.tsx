import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import InputField from "../components/InputField";
import SaveButton from "../components/SaveButton";
import { ctPost, upPost } from "../api/api";

const AddPostScreen = ({ onCloseScreenPress, onCreateSuccess, selectedItem }) => {
  const [title, setTitle] = useState(selectedItem?.title ?? "");
  const [description, setDescription] = useState(selectedItem?.description ?? "");

  const createNewBook = () => {
    ctPost({
        body:{
            title: title,
            description: description
        },
        onSuccess:() => {
            onCloseScreenPress()
             onCreateSuccess()
             selectedItem={}
            },
        onError:(err) => {Alert.alert("Error while adding post")}
    })
  }

  const editBook = () => {
    upPost({
        body:{
            title: title,
            description: description
        },
        onSuccess:() => {
            onCloseScreenPress()
             onCreateSuccess()
              selectedItem={}
            },
            itemID: selectedItem.id,
        onError:(err) => {Alert.alert("Error while adding post")}
    })
  }
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={onCloseScreenPress} style={styles.button}>
        <Ionicons name="close-circle" size={30} color="#000" />
      </TouchableOpacity>
      <View style={styles.body}>
        <Text style={styles.title}>Post Details</Text>
      </View>
      <View style={styles.inputContainer}>
        <InputField
          placeholder={"Post name"}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <InputField
          placeholder={"Post description"}
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
      </View>
      <View style={styles.saveButton}>
        <SaveButton onPress={!!selectedItem ? editBook : createNewBook}/>
      </View>
    </SafeAreaView>
  );
};

export default AddPostScreen;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    right: 16,
    top: 60,
  },
  body: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 20,
  },
  inputContainer: {
    paddingHorizontal: 16,
  },
  saveButton: {
    padding: 16
  }
});
