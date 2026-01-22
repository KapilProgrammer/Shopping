import { Platform, StatusBar, StyleSheet, View, ViewStyle } from 'react-native'
import React, { FC, ReactNode } from 'react'
import { SafeAreaView } from "react-native-safe-area-context"
import { AppColor } from '../../styles/colers'

interface AppSafeViewProps {
    children: ReactNode,
    style?: ViewStyle
}

const AppSafeView: FC<AppSafeViewProps> = ({ children, style }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={[styles.container, style]}>
                {children}
            </View>
        </SafeAreaView>
    )
}

export default AppSafeView

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: AppColor.white,
    },
    container: {
        flex: 1
    }
})