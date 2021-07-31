import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'

import Routes from './app/routes'

const App = () => {
  return (
    <PaperProvider>
      <StatusBar style="auto" />

      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App
