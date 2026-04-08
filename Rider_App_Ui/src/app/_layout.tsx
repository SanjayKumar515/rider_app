import React from 'react'
import { Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { WSProvider } from '@/service/WSProvider'

const Layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <WSProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="role" />
        </Stack>
      </WSProvider>
    </GestureHandlerRootView>

  )
}

export default Layout