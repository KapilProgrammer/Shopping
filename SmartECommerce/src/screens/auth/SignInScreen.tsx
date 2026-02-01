import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
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

const schema = yup
    .object({
        email: yup
            .string()
            .email("Please enter a valid email")
            .required("Email is required"),
        password: yup
            .string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters"),
    })
    .required();

// 3- Define the type
type FormData = yup.InferType<typeof schema>;

const SignInScreen = () => {
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
                errorMessage = "User Not found"
            }else if(error.code === "auth/invalid-credential"){
                errorMessage = "Wrong email or Password"
            }else{
                errorMessage = "An error occure during sign-in"
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
                placeholder="Email"
                keyboardType="email-address"
            />
            <AppTextInputController<FormData>
                control={control}
                name="password"
                placeholder="Password"
                secureTextEntry
            />

            <AppText style={styles.appName}>Smart E-Commerce</AppText>
            <AppButton title='Login' onPress={handleSubmit(onLoginPress)} />
            <AppButton title='Sign Up'
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