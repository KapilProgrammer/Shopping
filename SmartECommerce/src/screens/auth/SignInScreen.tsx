import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState, useTransition } from 'react'
import AppSafeView from '../../components/views/AppSafeView'
import { sharedStylesHorizantel } from '../../styles/shairedStyles'
import { IMAGES } from '../../constants/images-paths'
import { s, vs } from 'react-native-size-matters'
import AppText from '../../components/texts/AppText'
import AppButton from '../../components/buttons/AppButton'
import { AppColor } from '../../styles/colers'
import { useNavigation } from '@react-navigation/native'

import AppTextInputController from "../../components/inputs/AppTextInputController";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/firebase'
import { showMessage } from 'react-native-flash-message'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../store/reducers/useSlice'
import { useTranslation } from 'react-i18next'


const SignInScreen = () => {
    const {t} = useTranslation()
    
    const schema = yup
        .object({
            email: yup
                .string()
                .email(t("sign_in_email_invalid"))
                .required(t("sign_in_email_required")),
            password: yup
                .string()
                .required(t("sign_in_password_required"))
                .min(6, t("sign_in_password_min_length")),
        })
        .required();
    
    // 3- Define the type
    type FormData = yup.InferType<typeof schema>;
    const { control, handleSubmit } = useForm<FormData>({
        resolver: yupResolver(schema),
    });
    const navigation = useNavigation()
    const dispatch = useDispatch()


    const onLoginPress = async (data: FormData) => {
        try {
            const userCredintal = await signInWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            navigation.navigate("MainAppBottomTabs")
            console.log(JSON.stringify(userCredintal,null,3));
            const userDataObj = {
                uid: userCredintal.user.uid
            }
            dispatch(setUserData(userDataObj))
            showMessage({
                type:"success",
                message:"Successfully Login"
            })
            
        } catch (error: any) {
            let errorMessage = ""
            console.log(error.code);
            
            if(error.code === "auth/user-not-found"){
                errorMessage = t("sign_in_error_user_not_found")
            }else if(error.code === "auth/invalid-credential"){
                errorMessage = t("sign_in_error_invalid_credential")
            }else{
                errorMessage = t("sign_in_error_default")
            }

            showMessage({
                type: "danger",
                message: errorMessage
            })
            
        }
    };
    return (
        <AppSafeView style={styles.container}>
            <Image source={IMAGES.appLogo} style={styles.logo} />
            <AppTextInputController<FormData>
                control={control}
                name="email"
                placeholder={t("sign_in_email_placeholder")}
                keyboardType="email-address"
            />
            <AppTextInputController<FormData>
                control={control}
                name="password"
                placeholder={t("sign_in_password_placeholder")}
                secureTextEntry
            />

            <AppText style={styles.appName}>Smart E-Commerce</AppText>
            <AppButton title={t("sign_in_login_button")} onPress={handleSubmit(onLoginPress)} />
            <AppButton title={t("sign_in_signup_button")}
                style={styles.registerButton}
                textColor={AppColor.primaryColor}
                onPress={() => navigation.navigate("SignUpScreen")}
            />
        </AppSafeView>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingHorizontal: sharedStylesHorizantel
    },
    logo: {
        height: s(150),
        width: s(150),
        marginBottom: vs(30)
    },
    appName: {
        fontSize: s(16),
        marginBottom: vs(15),
    },
    registerButton: {
        backgroundColor: AppColor.white,
        borderWidth: 1,
        marginTop: vs(15),
        borderColor: AppColor.primaryColor
    }
})