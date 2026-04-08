import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useWS } from "@/service/WSProvider";
import { useUserStore } from "@/store/userStore";
import { uiStyles } from "@/styles/uiStyles";

const LocationBar = () => {
  const { location } = useUserStore();
  const { disconnect } = useWS();
  return (
    <View style={uiStyles.absoluteTop}>
      <Text>LocationBar</Text>
    </View>
  );
};

export default LocationBar;

const styles = StyleSheet.create({});
