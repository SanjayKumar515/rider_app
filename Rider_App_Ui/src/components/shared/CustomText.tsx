
import { View, Text, StyleSheet, TextProps } from 'react-native'
import React, { FC } from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { Colors } from '@/utils/Constants'
import { CustomTextProps } from '@/utils/types'

const fontSizes = {
    h1: 24,
    h2: 22,
    h3: 20,
    h4: 18,
    h5: 16,
    h6: 14,
    h7: 10,
    h8: 9
}



const CustomText: FC<CustomTextProps> = ({
    variant = 'h6',
    style,
    fontSize,
    children,
    fontFamily = 'Regular',
    numberOfLines,
}) => {
    return (

        <Text
            style={[
                styles.text,
                {
                    fontSize: RFValue(fontSize ? fontSize : fontSizes[variant]),
                    fontFamily: fontFamily
                },
                style
            ]}
            numberOfLines={numberOfLines ? numberOfLines : undefined}
        >{children}</Text>

    )
}

export default CustomText

const styles = StyleSheet.create({
    text: {
        color: Colors.text,
        textAlign: 'left'
    }
})