import React from 'react'
import { Divider, Drawer } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import { DrawerContentScrollView } from '@react-navigation/drawer'

const AppMenu = ({ navigation }) => {
  const handleMenu = (route) => navigation.navigate(route)

  return (
    <DrawerContentScrollView>
      <Drawer.Item icon="leaf" label="Minhas Plantas" onPress={() => handleMenu('Root')} />
      <Drawer.Item icon="account" label="Meu Perfil" onPress={() => handleMenu('Profile')} />
      <Drawer.Item
        icon="account-multiple"
        label="Meus amigos"
        onPress={() => handleMenu('Contacts')}
      />
      <Drawer.Item icon="heart" label="Meus Interreses" />
      <Divider />
      <Drawer.Item
        icon="book-open-variant"
        label="Buscar Plantas"
        onPress={() => handleMenu('FindPlants')}
      />
      <Drawer.Item
        icon="account-plus"
        label="Buscar Usuários"
        onPress={() => handleMenu('FindContacts')}
      />
    </DrawerContentScrollView>
  )
}

export default AppMenu
