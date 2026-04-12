import { Text, View, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFonts } from 'expo-font'
import { commonStyles } from '@/styles/commonStyles'
import { splashStyles } from '@/styles/splashStyles'
import CustomText from '@/components/shared/CustomText'
import { useUserStore } from '@/store/userStore'
import { tokenStorage } from '@/store/storage'
import { resetAndNavigate } from '@/utils/Helpers'
import { jwtDecode } from 'jwt-decode'
import { refresh_tokens } from '@/service/apiInterceptors'
import { logout } from '@/service/authService'

interface DecodedToken {
  exp: number;
}

const Main = () => {
  const [loaded] = useFonts({
    Bold: require("../assets/fonts/NotoSans-Bold.ttf"),
    Medium: require("../assets/fonts/NotoSans-Medium.ttf"),
    Regular: require("../assets/fonts/NotoSans-Regular.ttf"),
    SemiBold: require("../assets/fonts/NotoSans-SemiBold.ttf"),
    Light: require("../assets/fonts/NotoSans-Light.ttf"),
  })

  // ALWAYS call hooks before early returns!
  const { user } = useUserStore();
  const [hasNavigated, setHasNavigated] = useState(false)

  const tokenCheck = async () => {
    const access_token = await tokenStorage.getString('access_token')
    const refresh_token = await tokenStorage.getString('refresh_token')
    if (access_token && refresh_token) {
      const decodedAccessToken = jwtDecode<DecodedToken>(access_token);
      const decodedRefreshToken = jwtDecode<DecodedToken>(refresh_token);

      const currentTime = Date.now() / 1000;

      if (decodedRefreshToken?.exp < currentTime) {
        resetAndNavigate("/role");
        logout()
        Alert.alert("Refresh Token Expired")
      }

      if (decodedAccessToken?.exp < currentTime) {

        try {
          refresh_tokens()
        } catch (error) {
          console.log(error);
          Alert.alert("Access Token Expired")

        }
      }

      if (user) {
        resetAndNavigate("/customer/customerHome")
      } else {
        resetAndNavigate("/rider/riderHome")
      }
    } else {
      resetAndNavigate('/role')
    }
  }

  useEffect(() => {
    if (loaded && !hasNavigated) {
      const timeOutId = setTimeout(() => {
        tokenCheck()
        setHasNavigated(true)
      }, 1000)
      return () => clearTimeout(timeOutId)
    }
  }, [loaded, hasNavigated])

  if (!loaded) {
    return null
  }



  return (
    <View style={commonStyles.container}>
      <Image
        source={require('@/assets/images/logo_t.png')}
        style={splashStyles.img}
      />
      <CustomText variant='h5' fontFamily='Medium' style={splashStyles.text}>Made in India</CustomText>
    </View>
  )
}


export default Main
