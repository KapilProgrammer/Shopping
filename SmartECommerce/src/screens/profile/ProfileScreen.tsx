import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/views/AppSafeView'
import HomeHeader from '../../components/headers/HomeHeader'
import ProfileSectionButton from '../../components/buttons/ProfileSectionButton'
import { sharedStylesHorizantel } from '../../styles/shairedStyles'
import AppText from '../../components/texts/AppText'
import { s, vs } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import { SheetManager } from 'react-native-actions-sheet'
import LanguageBottomSheet from '../../components/language/LanguageBottomSheet'
import { useTranslation } from 'react-i18next'

const ProfileScreen = () => { 
  const navigater = useNavigation()
  const {t} = useTranslation()
  return (
    <AppSafeView>
      <HomeHeader />
      <View style={{ paddingHorizontal: sharedStylesHorizantel }}>
        <ProfileSectionButton title={t("profile_my_orders")} onPress={() => navigater.navigate("OrderScreen")}/>
        <ProfileSectionButton title={t("profile_language")} onPress={() => SheetManager.show("LANG_SHEET")} />
      <LanguageBottomSheet />
        <ProfileSectionButton title={t("profile_logout")} />
      </View>
    </AppSafeView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})