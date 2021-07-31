import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import theme from '../../theme'

import { Root } from './styled'

const LoadingPage = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login')
    }, 1500)
  }, [])

  return (
    <Root>
      <ActivityIndicator color="primary" size="large" color={theme.primary} />
    </Root>
  )
}

export default LoadingPage
