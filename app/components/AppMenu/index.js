import React from 'react'
import { Text } from 'react-native'

import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer'

const AppMenu = () => {
  return (
    <DrawerContentScrollView>
      <Text>Drawer content</Text>
    </DrawerContentScrollView>
  )
}

export default AppMenu
