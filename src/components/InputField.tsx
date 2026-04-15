import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const InputField = ({value, onChangeText, placeholder, keyboardType}) => {
  return (
    <View style={styles.container}>
      <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType}
      />
    </View>
  )
}

export default InputField

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#EEEFEE",
        width: "100%",
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 8,
        marginBottom: 20
    }
})