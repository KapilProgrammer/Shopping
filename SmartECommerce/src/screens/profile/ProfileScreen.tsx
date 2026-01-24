import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/views/AppSafeView'
import HomeHeader from '../../components/headers/HomeHeader'
import ProfileSectionButton from '../../components/buttons/ProfileSectionButton'
import { sharedStylesHorizantel } from '../../styles/shairedStyles'
import AppText from '../../components/texts/AppText'
import { s, vs } from 'react-native-size-matters'

const ProfileScreen = () => { 
  return (
    <AppSafeView>
      <HomeHeader />
      <AppText varient='Bold' style={{ fontSize: s(18), marginTop: vs(10) }}>Hello, Kapil</AppText>
      <View style={{ paddingHorizontal: sharedStylesHorizantel }}>
        <ProfileSectionButton title={"My Order"} />
        <ProfileSectionButton title={"Language"} />
        <ProfileSectionButton title={"LogOut"} />
      </View>
    </AppSafeView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})