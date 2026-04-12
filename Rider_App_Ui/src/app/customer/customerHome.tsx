import { View, Text } from "react-native";
import React from "react";
import { homeStyles } from "@/styles/homeStyles";
import LocationBar from "@/components/customer/LocationBar";

const CustomerHome = () => {
  return (
    <View style={homeStyles.container}>
      <LocationBar />
    </View>
  );
};

export default CustomerHome;
