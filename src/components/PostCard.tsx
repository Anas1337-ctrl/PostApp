import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PostCard = () => {
  return (
    <View style={styles.container}>
      <Text>PostCard</Text>
      <Text>PostCard Detail</Text>
    </View>
  )
}

export default PostCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFF',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        borderRadius: 16,
        padding: 10,
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
        margin: 10,
        height: 50
    }
})