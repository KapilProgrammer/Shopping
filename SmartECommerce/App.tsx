// import { Button, StyleSheet, Text, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const App = () => {
//   const [expense, setExpense] = useState(0);

//   const storeData = async (value) => {
//     try {
//       await AsyncStorage.setItem('totalExpenses', value);
//     } catch (e) {
//       // saving error
//     }
//   };

//   // Read Data
//   const getData = async () => {
//     try {
//       const value = await AsyncStorage.getItem('totalExpenses');
//       if (value !== null) {
//         console.log(value);
//         setExpense(+value)
//       }
//     } catch (e) {
//       // error reading value
//     }
//   };

//   useEffect(() => {
//     getData()
//   },[])

//   // Adding Expense
//   const totalExpense = () => {
//     const newExpense = expense + 10
//     setExpense(newExpense)
//     storeData(newExpense?.toString())
//   }

//   const removeData = async () => {
//     try {
//       await AsyncStorage.removeItem('totalExpenses');
//     } catch (error) {
      
//     }
//   }

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text style={{ fontSize: 20 }}>Expense App</Text>
//       <Text style={{ fontSize: 30 }}>Total Expense : {expense}</Text>
//       <Button title='Add Expense' onPress={totalExpense} />
//       <Button title='Remove Expense' onPress={removeData} />
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})






import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Platform, StatusBar, ViewStyle, ActivityIndicator } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { NavigationContainer } from '@react-navigation/native';
import MainAppStack from './src/navigation/MainAppStack';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { store } from './src/store/Store';
import 'react-native-gesture-handler';
import i18n from './src/localization/i18n';
import { I18nextProvider } from 'react-i18next';


export default function App() {

  const [fontLoaded] = useFonts({
    "Nunito-Bold": require("./src/assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Medium": require("./src/assets/fonts/Nunito-Medium.ttf")
  })

  if (!fontLoaded) {
    return <ActivityIndicator size={"large"} />
  }

  return (
    <>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <NavigationContainer>
            <FlashMessage
              position="top"
              statusBarHeight={
                Platform.OS === 'android' ? StatusBar.currentHeight : 0
              }
            />
            <MainAppStack />
          </NavigationContainer>
        </I18nextProvider>
      </Provider>
    </>
  );
}

interface Styles {
  container: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {},
});
