import { StyleSheet, Text, TextInput, TextStyle, View } from 'react-native'
import React, { FC } from 'react'
import { s, vs } from 'react-native-size-matters'
import { AppColor } from '../../styles/colers'

interface AppTextInputProps{
    value:string;
    onChangeText: (text: string) => void;
    placeHolder? : string;
    secureTextEntry?:boolean;
    keyboardType?: "default" | "email-address" | "numeric",
    style?: TextStyle
}

const AppTextInput : FC<AppTextInputProps> = ({value,onChangeText,placeHolder,secureTextEntry,keyboardType,style}) => {
  return (
    <TextInput 
        value={value}
        onChangeText={onChangeText}
        placeholder={placeHolder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={[styles.input,style]}
    />
  )
}

export default AppTextInput

const styles = StyleSheet.create({
    input:{
        height:vs(40),
        borderRadius:s(25),
        borderWidth:1,
        borderColor:AppColor.borderColor,
        paddingHorizontal:s(15),
        fontSize:s(16),
        backgroundColor:AppColor.white,
        width:"100%",
        marginBottom:vs(10)
    }
})