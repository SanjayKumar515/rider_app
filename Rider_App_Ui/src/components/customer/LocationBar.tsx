import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useWS } from "@/service/WSProvider";
import { useUserStore } from "@/store/userStore";
import { uiStyles } from "@/styles/uiStyles";
import { logout } from "@/service/authService";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "@/utils/Constants";

const LocationBar = () => {
  const { location } = useUserStore();
  const { disconnect } = useWS();
  return (
    <View style={uiStyles.absoluteTop}>
      <View style={uiStyles.container}>
        <TouchableOpacity
          style={uiStyles.btn}
          onPress={() => logout(disconnect)}
        >
          <Ionicons name="menu" size={RFValue(18)} color={Colors.text} />
        </TouchableOpacity>
      </View>
      <Text>LocationBar</Text>
    </View>
  );
};

export default LocationBar;

const styles = StyleSheet.create({});
