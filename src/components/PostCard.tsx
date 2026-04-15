import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface PostCardProps {
  title: string;
  description: string;
  image: string;
  onEditTap: () => void
  onDeleteTap: () => void
}

const PostCard: FC<PostCardProps> = ({ title, description, image, onEditTap, onDeleteTap }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.button} onPress={onDeleteTap}>
            <MaterialIcons name="delete-outline" size={20} color="red" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onEditTap}>
            <MaterialIcons name="edit" size={20} color="#25a" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    borderRadius: 16,
    padding: 10,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    margin: 10,
  },
  title: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#555555",
    paddingBottom: 30,
  },
  image: {
    height: 120,
    width: "25%",
    resizeMode: "contain",
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    height: 35,
    width: 35,
    borderRadius: 20,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    marginStart: 10,
  },
});
