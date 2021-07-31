import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'

import Routes from './app/routes'

const App = () => {
  return (
    <PaperProvider>
      <StatusBar style="auto" />

      <Routes />
    </PaperProvider>
  )
}

export default App
