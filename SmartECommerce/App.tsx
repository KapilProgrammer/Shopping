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
