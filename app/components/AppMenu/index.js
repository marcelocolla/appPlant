import React from 'react'
import { Divider, Drawer } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import { DrawerContentScrollView } from '@react-navigation/drawer'

const AppMenu = ({ navigation }) => {
  const handleMenu = (route) => navigation.navigate(route)

  return (
    <DrawerContentScrollView>
      <Drawer.Item icon="account" label="Início" onPress={() => handleMenu('Root')} />
      <Drawer.Item icon="account" label="Meu Perfil" />
      <Drawer.Item icon="account-multiple" label="Meus amigos" />
      <Drawer.Item icon="leaf" label="Minhas Plantas" />
      <Drawer.Item icon="heart" label="Meus Interreses" />
      <Divider />
      <Drawer.Item icon="book-open-variant" label="Buscar Plantas" />
      <Drawer.Item icon="account-plus" label="Buscar Usuários" />
    </DrawerContentScrollView>
  )
}

export default AppMenu
