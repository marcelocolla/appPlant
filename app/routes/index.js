import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import AppMenu from '../components/AppMenu'
import AppHeader from '../components/AppHeader'
import LoadingPage from '../pages/loading'
import LoginPage from '../pages/login'
import MainPage from '../pages/main'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const Routes = () => {
  const initialRouteName = 'Loading'

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={initialRouteName}
        drawerContent={() => <AppMenu />}
        screenOptions={{ headerShown: true, header: (props) => <AppHeader {...props} /> }}
      >
        <Drawer.Screen name="Loading" component={LoadingPage} options={{ headerShown: false }} />
        <Drawer.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
        <Drawer.Screen name="Root" component={MainPage} options={{ title: 'Plantas' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default Routes
