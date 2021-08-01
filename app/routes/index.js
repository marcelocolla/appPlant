import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import AppMenu from '../components/AppMenu'
import AppHeader from '../components/AppHeader'
import LoadingPage from '../pages/loading'
import LoginPage from '../pages/login'
import SignInPage from '../pages/signIn'
import MainPage from '../pages/main'

const Drawer = createDrawerNavigator()

const Routes = () => {
  const initialRouteName = 'Loading'

  const options = {
    headerShown: false,
  }

  return (
    <Drawer.Navigator
      initialRouteName={initialRouteName}
      drawerContent={(props) => <AppMenu {...props} />}
      screenOptions={{ headerShown: true, header: (props) => <AppHeader {...props} /> }}
    >
      <Drawer.Screen name="Loading" component={LoadingPage} options={options} />
      <Drawer.Screen name="Login" component={LoginPage} options={options} />
      <Drawer.Screen name="SignIn" component={SignInPage} options={options} />
      <Drawer.Screen name="Root" component={MainPage} options={{ title: 'Plantas' }} />
    </Drawer.Navigator>
  )
}

export default Routes
