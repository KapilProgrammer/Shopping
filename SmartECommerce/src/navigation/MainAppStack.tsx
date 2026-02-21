import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import MainAppBottomTabs from "./MainAppBottomTabs";
import CheckOutScreen from "../screens/cart/CheckOutScreen";
import OrderScreen from "../screens/cart/OrderScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUserData } from "../store/reducers/useSlice";
import { useEffect, useState } from "react";
import { RootState } from "../store/Store";
import { ActivityIndicator, View } from "react-native";
import { AppColor } from "../styles/colers";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";


const Stack = createStackNavigator()

// export default function MainAppStack() {

//     const isUserLoggedIn = async () => {
//         const dispatch = useDispatch()
//         const {userData} = useSelector((state: RootState) => state.userSlice)

//         try {
//             const storageUserData = await AsyncStorage.getItem("userData")
//             console.log("Hi"+storageUserData);

//             if (storageUserData) {
//                 dispatch(setUserData(JSON.parse(storageUserData)))
//             }
//         } catch (error) {
//             console.log("Error fetching user data from storage:", error);
//         }
//     }
//     useEffect(() => {
//         isUserLoggedIn()
//     }, [])
//     return (
//         <Stack.Navigator
//             screenOptions={{
//                 headerShown: false
//             }}
//             initialRouteName={userData ? "MainAppBottomTabs" : "AuthStack"}
//         >
//             <Stack.Screen name="AuthStack" component={AuthStack} />
//             <Stack.Screen name="MainAppBottomTabs" component={MainAppBottomTabs} />
//             <Stack.Screen options={{ headerShown: true }} name="ChechOutScreen" component={CheckOutScreen} />
//             <Stack.Screen options={{ headerShown: true }} name="OrderScreen" component={OrderScreen} />
//         </Stack.Navigator>
//     )
// }

export default function MainAppStack() {
    // const dispatch = useDispatch()
    // const { userData,isLoading } = useSelector((state: RootState) => state.userSlice)

    // const isUserLoggedIn = async () => {
    //     try {
    //         const storageUserData = await AsyncStorage.getItem("userData")

    //         if (storageUserData) {
    //             dispatch(setUserData(JSON.parse(storageUserData)))
    //         }else{
    //             dispatch(setLoading(false))
    //         }
    //     } catch (error) {
    //         console.log("Error fetching user data from storage:", error)
    //         dispatch(setLoading(false))
    //     }
    // }

    // useEffect(() => {
    //     isUserLoggedIn()
    // }, [])

    const [isLoading, setIsLoading] = useState(true)
    const [userData, setUserData] = useState<object | null>(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (userDataFromFireBase) => {
            if (userDataFromFireBase) {
                console.log("User is logged In")
                setUserData(userDataFromFireBase)
            } else {
                console.log("User is logged out")
                setUserData(null)
            }
            setIsLoading(false)
        })

        return () => unsubscribe()
    }, [])

    if (isLoading) {
        return <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
            <ActivityIndicator size={"large"} color={AppColor.primaryColor} />
        </View>
    }

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={userData ? "MainAppBottomTabs" : "AuthStack"}
        >
            <Stack.Screen name="AuthStack" component={AuthStack} />
            <Stack.Screen name="MainAppBottomTabs" component={MainAppBottomTabs} />
            <Stack.Screen options={{ headerShown: true }} name="ChechOutScreen" component={CheckOutScreen} />
            <Stack.Screen options={{ headerShown: true }} name="OrderScreen" component={OrderScreen} />
        </Stack.Navigator>
    )
}
