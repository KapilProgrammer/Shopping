import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import AppText from '../texts/AppText'
import { AppColor } from '../../styles/colers'
import { s, vs } from 'react-native-size-matters'
import { AppFont } from '../../styles/fonts'
import {MaterialIcons} from "@expo/vector-icons"

interface ProfileSectionButtonProps{
    onPress: () => void;
    title: string
}

const ProfileSectionButton : FC<ProfileSectionButtonProps> = ({ onPress, title }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.continer}>
            <View style={styles.textContinure}>
                <AppText style={styles.textTitle}>{title}</AppText>
            </View>
            <View>
                <MaterialIcons name='arrow-forward-ios'  size={s(14)} color={AppColor.medGrey} />
            </View>
        </TouchableOpacity>
    )
}

export default ProfileSectionButton

const styles = StyleSheet.create({
    continer: {
        width: "100%",
        borderBottomColor: AppColor.lightGray,
        paddingBottom: vs(10),
        marginTop: vs(14),
        flexDirection: "row",
        borderBottomWidth:1
    },
    textTitle: {
        fontSize: s(16),
        fontFamily: AppFont.Medium,
        color: AppColor.primaryColor
    },
    textContinure:{
        flex:5,
        justifyContent:"flex-start",
        alignItems:"flex-start",
        marginHorizontal:s(8)
    }
})