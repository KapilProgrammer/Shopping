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
                message:"Order Places Successfully"
            })

            navigation.goBack()
            console.log(formData);
            dispatch(exptyCart())
        } catch (error) {
            console.error("Error saving order: ",error)
            showMessage({
                type:"danger",
                message:"Error Happens"
            })
        }
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