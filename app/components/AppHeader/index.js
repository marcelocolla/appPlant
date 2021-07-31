import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Appbar, Avatar } from 'react-native-paper'
import {
  NavigationContainer,
  DrawerActions,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import theme from '../../theme'

const Header = ({ scene, previous }) => {
  const navigation = useNavigation()

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

  return (
    <Appbar.Header theme={{ colors: { primary: theme.appBar } }}>
      {previous ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : (
        <TouchableOpacity onPress={handelMenu}>
          <MaterialCommunityIcons name="menu" size={36} color={theme.white} />
        </TouchableOpacity>
      )}

      <Appbar.Content title={title || 'Plantas'} />
    </Appbar.Header>
  )
}

export default Header
