import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import MainAppBottomTabs from "./MainAppBottomTabs";
import CheckOutScreen from "../screens/cart/CheckOutScreen";
import OrderScreen from "../screens/cart/OrderScreen";


const Stack = createStackNavigator()

export default function MainAppStack(){
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown:false
            }}
        >
            <Stack.Screen name="AuthStack"  component={AuthStack}/>
            <Stack.Screen name="MainAppBottomTabs"  component={MainAppBottomTabs}/>
            <Stack.Screen options={{headerShown:true}} name="ChechOutScreen" component={CheckOutScreen} />
            <Stack.Screen options={{headerShown:true}} name="OrderScreen" component={OrderScreen} />
        </Stack.Navigator>
    )
}