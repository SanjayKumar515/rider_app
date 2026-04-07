import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import {GestureHandlerRootView} from 'react-native-gesture-handler'

const Layout = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="index" />
        <Stack.Screen name="role" />
      </Stack>
    </GestureHandlerRootView>
  
  )
}

export default Layout