import { Platform, StyleSheet, Text, TextProps, TextStyle, View } from 'react-native'
import React, { FC } from 'react'
import {s} from "react-native-size-matters"
import { AppColor } from '../../styles/colers';
import { StatusBar } from 'expo-status-bar';
import { AppFont } from '../../styles/fonts';


interface AppTextProps extends TextProps{
    children: React.ReactNode;
    style?: TextStyle | TextStyle[];
    varient? : "bold" | "medium";
}

const AppText : FC<AppTextProps> = ({children,style,varient = "medium",...rest}) => {
  return (
    <Text {...rest} style={[styles[varient], style]}>
        {children}
    </Text>
  )
}

export default AppText

const styles = StyleSheet.create({
    bold:{
        fontSize: s(18),
        color:AppColor.black,
        fontFamily:AppFont.Bold
    },
    medium:{
        fontSize: s(16),
        color:AppColor.black,
        fontFamily:AppFont.Medium
    }
})