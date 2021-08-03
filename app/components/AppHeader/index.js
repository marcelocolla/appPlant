import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Appbar, useTheme } from 'react-native-paper'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Header = ({ scene }) => {
  const navigation = useNavigation()
  const { colors } = useTheme()

  const { options } = scene.descriptor
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name

  const handelMenu = () => {
    navigation.dispatch(DrawerActions.toggleDrawer())
  }

  const handleProfile = () => {
    navigation.navigate('Profile')
  }

  return (
    <Appbar.Header theme={{ colors: { primary: colors.appBar } }}>
      <TouchableOpacity onPress={handelMenu}>
        <MaterialCommunityIcons name="menu" size={36} color={colors.white} />
      </TouchableOpacity>

      <Appbar.Content title={title || 'Plantas'} />

      <TouchableOpacity onPress={handleProfile}>
        <MaterialCommunityIcons name="account" size={32} color={colors.white} />
      </TouchableOpacity>
    </Appbar.Header>
  )
}

export default Header
