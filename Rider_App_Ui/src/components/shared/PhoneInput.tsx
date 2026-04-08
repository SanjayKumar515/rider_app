import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { FC } from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import CustomText from './CustomText'
import { PhoneInputProps } from '@/utils/types'

const PhoneInput: FC<PhoneInputProps> = ({
    value,
    onChangeText,
    onBlur,
    onFocus,
}) => {
    return (
        <View style={styles.container}>
            <CustomText style={styles.text}>+91</CustomText>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                onBlur={onBlur}
                onFocus={onFocus}
                keyboardType='phone-pad'
                placeholderTextColor={"#ccc"}
                placeholder='0000000000'
            />
        </View>
    )
}

export default PhoneInput

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginVertical: 15,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        paddingHorizontal: 10,

    },

    input: {
        fontSize: RFValue(13),
        fontFamily: 'Medium',
        height: 45,
        width: "90%"

    },
    text: {
        fontSize: RFValue(13),
        top: -1,
        fontFamily: 'Medium'
    },
})