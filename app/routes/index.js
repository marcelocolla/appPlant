import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import AppMenu from '../components/AppMenu'
import AppHeader from '../components/AppHeader'
import LoadingPage from '../pages/loading'
import LoginPage from '../pages/login'
import SignInPage from '../pages/signIn'

// User Logged
import MainPage from '../pages/main'
import ProfilePage from '../pages/profile'
import ProfileEditPage from '../pages/profileEdit'
import ProfilePasswordPage from '../pages/profilePassword'
import FindPlantsPage from '../pages/findPlants'
import ContactsPage from '../pages/contacts'
import FindContactsPage from '../pages/findContacts'
import InterestsPage from '../pages/interests'

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
      <Drawer.Screen name="Profile" component={ProfilePage} options={{ title: 'Meu perfil' }} />
      <Drawer.Screen
        name="ProfileEdit"
        component={ProfileEditPage}
        options={{ title: 'Editar perfil' }}
      />
      <Drawer.Screen
        name="ProfilePassword"
        component={ProfilePasswordPage}
        options={{ title: 'Alterar senha' }}
      />
      <Drawer.Screen name="Root" component={MainPage} options={{ title: 'Minhas plantas' }} />
      <Drawer.Screen name="Contacts" component={ContactsPage} options={{ title: 'Meus amigos' }} />
      <Drawer.Screen
        name="Interests"
        component={InterestsPage}
        options={{ title: 'Meus interreses' }}
      />
      <Drawer.Screen
        name="FindContacts"
        component={FindContactsPage}
        options={{ title: 'Buscar usuários' }}
      />
      <Drawer.Screen
        name="FindPlants"
        component={FindPlantsPage}
        options={{ title: 'Buscar Plantas' }}
      />
    </Drawer.Navigator>
  )
}

export default Routes
