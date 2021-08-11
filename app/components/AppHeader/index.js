import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Appbar, useTheme } from 'react-native-paper'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const AppHeader = ({ scene }) => {
  const navigation = useNavigation()
  const { colors } = useTheme()

  const { headerTitle, title, shouldBack, shouldUser = true } = scene?.descriptor?.options
  const titleText = headerTitle || title || scene.route.name
  const menuIcon = shouldBack ? 'arrow-left' : 'menu'

  const handelMenu = () => {
    if (shouldBack) {
      navigation.goBack()
    } else {
      navigation.dispatch(DrawerActions.toggleDrawer())
    }
  }

  const handleProfile = () => {
    navigation.navigate('Profile')
  }

  return (
    <Appbar.Header theme={{ colors: { primary: colors.appBar } }}>
      <TouchableOpacity onPress={handelMenu}>
        <MaterialCommunityIcons name={menuIcon} size={36} color={colors.white} />
      </TouchableOpacity>

      <Appbar.Content title={titleText || 'Plantas'} />

      {shouldUser ? (
        <TouchableOpacity onPress={handleProfile}>
          <MaterialCommunityIcons name="account" size={32} color={colors.white} />
        </TouchableOpacity>
      ) : null}
    </Appbar.Header>
  )
}

export default AppHeader
