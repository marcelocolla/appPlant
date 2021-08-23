import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { createContext, useEffect, useState } from 'react'

import { Auth } from '../services/api'
import httpClient from '../services/httpClient'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, updateUser] = useState(null)

  useEffect(() => {
    async function loadUser() {
      const storedUser = await AsyncStorage.getItem('user')
      const storedToken = await AsyncStorage.getItem('token')
      if (storedUser && storedToken) {
        updateUser(JSON.parse(storedUser))
        httpClient.defaults.headers.Authorization = `Bearer ${storedToken}`
      }
    }
    loadUser()
  }, [])

  useEffect(() => {
    async function saveUser() {
      await AsyncStorage.setItem('user', JSON.stringify(user))
    }
    saveUser()
  }, [user])

  async function signIn(email, password) {
    const {
      data: { user, token },
    } = await Auth.signIn(email, password)

    updateUser(user)

    httpClient.defaults.headers.Authorization = `Bearer ${token}`

    await AsyncStorage.setItem('user', JSON.stringify(user))
    await AsyncStorage.setItem('token', token)
  }

  async function signOut(navigation) {
    await AsyncStorage.clear()
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    })
    updateUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, updateUser, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
