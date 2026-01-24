import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/views/AppSafeView'
import { commonStyle, sharedStylesHorizantel } from '../../styles/shairedStyles'
import { s, vs } from 'react-native-size-matters'
import { AppColor } from '../../styles/colers'
import AppTextInput from '../../components/inputs/AppTextInput'
import AppButton from '../../components/buttons/AppButton'
import { IS_Android, IS_IOS } from '../../constants/constants'

const CheckOutScreen = () => {
    return (
        <AppSafeView>
            <View style={{ paddingHorizontal: sharedStylesHorizantel }}>
                <View style={styles.inputContainser}>
                    <AppTextInput placeHolder='Full Name' />
                    <AppTextInput placeHolder='Phone Number' />
                    <AppTextInput placeHolder='Detailed Address' />
                </View>
            </View>
            <View style={styles.bottomButtonContainser}>
                <AppButton title='Conform' />
            </View>
        </AppSafeView>
    )
}

export default CheckOutScreen

const styles = StyleSheet.create({
    inputContainser: {
        ...commonStyle.shadow,
        padding: s(8),
        borderRadius: s(8),
        backgroundColor: AppColor.white,
        marginTop: IS_IOS ? vs(15) : undefined,
        paddingTop: vs(15)
    },
    bottomButtonContainser:{
        paddingHorizontal:sharedStylesHorizantel,
        position:"absolute",
        width:"100%",
        bottom: IS_Android ? vs(15) : 0,
        borderTopWidth:1,
        borderColor:AppColor.lightGray,
        paddingTop:vs(10)
    }
})