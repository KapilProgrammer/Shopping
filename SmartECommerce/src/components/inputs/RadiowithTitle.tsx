import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import { AppColor } from '../../styles/colers'
import AppText from '../texts/AppText'

const RadiowithTitle = ({ selected, title, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.circle}>
                {
                    selected && <View style={styles.innerCircle} />
                }
            </View>
            <AppText style={{ marginLeft: s(10) }}>{title}</AppText>
        </TouchableOpacity>
    )
}

export default RadiowithTitle

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: vs(10)
    },
    circle: {
        height: s(20),
        width: s(20),
        borderRadius: s(10),
        borderWidth: 2,
        borderColor: AppColor.black,
        alignItems: "center",
        justifyContent: "center"
    },
    innerCircle: {
        height: s(10),
        width: s(10),
        borderRadius: s(5),
        backgroundColor: AppColor.black
    }
})