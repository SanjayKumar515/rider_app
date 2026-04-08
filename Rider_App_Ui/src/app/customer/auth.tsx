import { View, ScrollView, Image, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { authStyles } from "@/styles/authStyles";
import { commonStyles } from "@/styles/commonStyles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import CustomText from "@/components/shared/CustomText";
import { useWS } from "@/service/WSProvider";
import PhoneInput from "@/components/shared/PhoneInput";
import CustomButton from "@/components/shared/CustomButton";
import { signin } from "@/service/authService";

const CustomerAuth = () => {
  const { updateAccessToken } = useWS();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNext = async () => {
    if (!phoneNumber || phoneNumber.length !== 10) {
      Alert.alert("Bro enter your phone number");
      return;
    }
    signin({ role: "customer", phoneNumber }, updateAccessToken);
  };

  return (
    <SafeAreaView style={authStyles.container}>
      <ScrollView contentContainerStyle={authStyles.container}>
        <View style={commonStyles.flexRowBetween}>
          <Image
            source={require("@/assets/images/logo_t.png")}
            style={authStyles.logo}
          />
          <TouchableOpacity>
            <MaterialIcons name="help" size={18} color="grey" />
            <CustomText fontFamily="Medium" variant="h7">
              Help
            </CustomText>
          </TouchableOpacity>
        </View>
        <CustomText fontFamily="Medium" variant="h6">
          What's your number?
        </CustomText>
        <CustomText
          fontFamily="Regular"
          variant="h7"
          style={commonStyles.lightText}
        >
          Enter your mobile number to continue
        </CustomText>
        <PhoneInput value={phoneNumber} onChangeText={setPhoneNumber} />

        <View style={authStyles.footerContainer}>
          <CustomText
            fontFamily="Regular"
            variant="h7"
            style={commonStyles.lightText}
          >
            By proceeding, you agree to our
          </CustomText>
          <CustomText
            fontFamily="Medium"
            variant="h7"
            style={commonStyles.lightText}
          >
            Terms of Use & Privacy Policy
          </CustomText>

          <CustomButton
            title="Next"
            onPress={handleNext}
            loading={false}
            disabled={phoneNumber.length !== 10}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomerAuth;
