import React from 'react'
import { Divider, Drawer } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import { DrawerContentScrollView } from '@react-navigation/drawer'

const AppMenu = ({ navigation }) => {
  const handleMenu = (route) => navigation.navigate(route)

  return (
    <DrawerContentScrollView>
      <Drawer.Item icon="home" label="Início" onPress={() => handleMenu('Feed')} />
      <Drawer.Item icon="leaf" label="Minhas plantas" onPress={() => handleMenu('Plants')} />
      <Drawer.Item
        icon="account-multiple"
        label="Meus amigos"
        onPress={() => handleMenu('Contacts')}
      />
      <Drawer.Item icon="heart" label="Meus interreses" onPress={() => handleMenu('Interests')} />
      <Drawer.Item icon="account" label="Meu perfil" onPress={() => handleMenu('Profile')} />

      <Divider />
      <Drawer.Item
        icon="book-open-variant"
        label="Buscar plantas"
        onPress={() => handleMenu('FindPlants')}
      />
      <Drawer.Item
        icon="account-plus"
        label="Buscar usuários"
        onPress={() => handleMenu('FindContacts')}
      />

      <Divider />
      <Drawer.Item icon="exit-to-app" label="Desconectar" />
    </DrawerContentScrollView>
  )
}

export default AppMenu
