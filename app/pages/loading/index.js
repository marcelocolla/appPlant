import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import theme from '../../theme'

import { Root } from './styled'

const LoadingPage = () => {
  const navigation = useNavigation()
  const { colors } = useTheme()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login')
    }, 1500)
  }, [])

  return (
    <Root>
      <ActivityIndicator color="primary" size="large" color={colors.primary} />
    </Root>
  )
}

export default LoadingPage
