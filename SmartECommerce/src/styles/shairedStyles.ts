import { StyleSheet } from "react-native"
import { s } from "react-native-size-matters"
import { AppColor } from "./colers"

export const sharedStylesHorizantel = s(12)

export const commonStyle = StyleSheet.create({
    shadow:{
        //IOS
        shadowColor:AppColor.black,
        shadowOffset:{width : 0, height: 4},
        shadowOpacity:.2,
        shadowRadius:4,

        // Android
        elevation:4
    }
})