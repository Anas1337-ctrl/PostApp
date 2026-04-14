import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PostCard from '../components/PostCard'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <PostCard/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})