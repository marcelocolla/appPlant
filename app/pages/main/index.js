import React from 'react'

import { Root, Title } from './styled'
import { TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const MainPage = () => {
  const navigation = useNavigation()

  return (
    <Root>
      <Title>Main page</Title>

      <Text>main page content</Text>
    </Root>
  )
}

export default MainPage
