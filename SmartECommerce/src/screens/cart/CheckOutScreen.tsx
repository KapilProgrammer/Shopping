import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/views/AppSafeView'
import { commonStyle, sharedStylesHorizantel } from '../../styles/shairedStyles'
import { s, vs } from 'react-native-size-matters'
import { AppColor } from '../../styles/colers'
import AppTextInput from '../../components/inputs/AppTextInput'
import AppButton from '../../components/buttons/AppButton'
import { IS_Android, IS_IOS } from '../../constants/constants'
import { useForm } from 'react-hook-form'
import AppTextInputController from '../../components/inputs/AppTextInputController'
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'


const scema = yup.object({
    fullName: yup.string()
    .required("Name is Required")
                .min(3,"Name must be at least 3 Character"),
    phoneNumber: yup.string()
                .required("Phone Number is Require")
                .matches(/^[0-9]+$/,"Mest be only digits")
                .min(10,"Phone Number must be at least 10 Digits"),
    detailAddress: yup.string()
    .required()
    .min(15,"Please provide a detailed Address with at least 15 chracter")
}).required();

type FormData = yup.InferType<typeof scema>

const CheckOutScreen = () => {

    const {control,handleSubmit} = useForm({
        resolver: yupResolver(scema)
    })

    const saveOrder = (formData: FormData) => {
        Alert.alert(JSON.stringify(formData))
        console.log(formData);
    }

    return (
        <AppSafeView>
            <View style={{ paddingHorizontal: sharedStylesHorizantel }}>
                <View style={styles.inputContainser}>
                    <AppTextInputController control={control} name={"fullName"} placeholder='Full Name' />
                    <AppTextInputController control={control} name={"phoneNumber"} placeholder='Phone Number' />
                    <AppTextInputController control={control} name={"detailAddress"} placeholder='Detailed Address' />
                </View>
            </View>
            <View style={styles.bottomButtonContainser}>
                <AppButton title='Conform' onPress={handleSubmit(saveOrder)}/>
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