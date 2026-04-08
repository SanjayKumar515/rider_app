import { StatusBar } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { WSProvider } from '@/service/WSProvider'
import { SafeAreaView } from 'react-native-safe-area-context'

const Layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <WSProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <StatusBar
             barStyle={"default"}
             backgroundColor={"orange"}
             translucent={false}
          />
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="role" />
          </Stack>
        </SafeAreaView>
      </WSProvider>
    </GestureHandlerRootView>

  )
}

export default Layout