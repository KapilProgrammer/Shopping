import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/views/AppSafeView'
import HomeHeader from '../../components/headers/HomeHeader'
import ProfileSectionButton from '../../components/buttons/ProfileSectionButton'
import { sharedStylesHorizantel } from '../../styles/shairedStyles'
import AppText from '../../components/texts/AppText'
import { s, vs } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = () => { 
  const navigater = useNavigation()
  return (
    <AppSafeView>
      <HomeHeader />
      <View style={{ paddingHorizontal: sharedStylesHorizantel }}>
        <ProfileSectionButton title={"My Order"} onPress={() => navigater.navigate("OrderScreen")}/>
        <ProfileSectionButton title={"Language"} />
        <ProfileSectionButton title={"LogOut"} />
      </View>
    </AppSafeView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})