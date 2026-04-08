import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { FC } from "react";
import { CustomButtonProps } from "@/utils/types";
import { Colors } from "@/utils/Constants";
import CustomText from "./CustomText";

const CustomButton: FC<CustomButtonProps> = ({
  title,
  onPress,
  loading,
  disabled,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        { backgroundColor: disabled ? Colors.secondary : Colors.primary },
      ]}
    >
      {loading ? (
        <ActivityIndicator color={Colors.text} size={"small"} />
      ) : (
        <CustomText
          fontFamily="Medium"
          variant="h7"
          style={{
            fontSize: 16,
            color: disabled ? "#fff" : Colors.text,
          }}
        >
          {title}
        </CustomText>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    margin: 10,
    padding: 10,
    height: 45,
    width: "90%",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
