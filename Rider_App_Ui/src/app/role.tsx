import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
import { roleStyles } from "@/styles/roleStyles";
import CustomText from "@/components/shared/CustomText";

const Role = () => {
  const handleCustomerPress = () => {
    router.navigate("/customer/auth");
  };
  const handleRiderPress = () => {
    router.navigate("/rider/auth");
  };
  return (
    <View style={roleStyles.container}>
      <Image
        source={require("@/assets/images/logo_t.png")}
        style={roleStyles.logo}
      />

      <CustomText variant="h5" fontFamily="Medium">
        Choose your user type
      </CustomText>
      <TouchableOpacity
        style={roleStyles.card}
        onPress={handleCustomerPress}
      >
        <Image
          source={require("@/assets/images/customer.jpg")}
          style={roleStyles.image}
        />

        <View style={roleStyles.cardContent}>
          <CustomText style={roleStyles.title}>Customer</CustomText>
          <CustomText
            style={roleStyles.description}
          >
            Are you a customer ? Order rides and deliveries easily
          </CustomText>
        </View>

      </TouchableOpacity>

      <TouchableOpacity
        style={roleStyles.card}
        onPress={handleRiderPress}
      >
        <Image
          source={require("@/assets/images/rider.jpg")}
          style={roleStyles.image}
        />

        <View style={roleStyles.cardContent}>
          <CustomText style={roleStyles.title}>Rider</CustomText>
          <CustomText
            style={roleStyles.description}
          >
            Are you a rider ? Earn money by delivering rides and packages
          </CustomText>
        </View>

      </TouchableOpacity>

    </View>

  );
};

export default Role;
