import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/views/AppSafeView'
import { commonStyle, sharedStylesHorizantel } from '../../styles/shairedStyles'
import { s, vs } from 'react-native-size-matters'
import { AppColor } from '../../styles/colers'
import AppTextInput from '../../components/inputs/AppTextInput'
import AppButton from '../../components/buttons/AppButton'
import { IS_Android, IS_IOS, shippingFee, taxes } from '../../constants/constants'
import { useForm } from 'react-hook-form'
import AppTextInputController from '../../components/inputs/AppTextInputController'
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/Store'
import { addDoc, collection, doc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import { showMessage } from 'react-native-flash-message'
import { useNavigation } from '@react-navigation/native'
import { exptyCart } from '../../store/reducers/CartSlice'
import { useTranslation } from 'react-i18next'


const CheckOutScreen = () => {
    const {t} = useTranslation()
    
    const scema = yup.object({
        fullName: yup.string()
        .required(t("checkout_name_required"))
                    .min(3,t("checkout_name_min_length")),
        phoneNumber: yup.string()
                    .required(t("checkout_phone_required"))
                    .matches(/^[0-9]+$/,t("checkout_phone_digits"))
                    .min(10,t("checkout_phone_min_length")),
        detailAddress: yup.string()
        .required(t("checkout_address_required"))
        .min(15,t("checkout_address_min_length"))
    }).required();
    
    type FormData = yup.InferType<typeof scema>

    const {control,handleSubmit} = useForm({
        resolver: yupResolver(scema)
    })

    
    const {userData} = useSelector((state: RootState) => state.userSlice)
    const {items} = useSelector((state: RootState) => state.cartSlice)
    const totalProductPrice = items.reduce((acc,item) => acc + item.sum,0)
    const totalPrice = totalProductPrice + taxes + shippingFee
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const saveOrder = async (formData: FormData) => {
        try {
            const orderBody = {
                ...formData,
                items,
                totalProductPrice,
                createdAt: new Date(),
                totalPrice
            }
            const userOrderRef = collection(doc(db,"users",userData.uid),"orders");  
            await addDoc(userOrderRef,orderBody) 

            const orderRef = collection(db,"orders")
            await addDoc(orderRef,orderBody)

            showMessage({
                type:"success",
                message:t("checkout_success_message")
            })

            navigation.goBack()
            console.log(formData);
            dispatch(exptyCart())
        } catch (error) {
            console.error("Error saving order: ",error)
            showMessage({
                type:"danger",
                message:t("checkout_error_message")
            })
        }
    }
   

    
    

    return (
        <AppSafeView>
            <View style={{ paddingHorizontal: sharedStylesHorizantel }}>
                <View style={styles.inputContainser}>
                    <AppTextInputController control={control} name={"fullName"} placeholder={t("checkout_fullname_placeholder")} />
                    <AppTextInputController control={control} name={"phoneNumber"} placeholder={t('checkout_phone_placeholder')} />
                    <AppTextInputController control={control} name={"detailAddress"} placeholder={t('checkout_address_placeholder')} />
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