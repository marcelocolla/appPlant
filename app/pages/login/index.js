import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Title, TextInput, Button } from 'react-native-paper'

import { Root, FormContent, Spacer } from './styled'

const LoginPage = () => {
  const navigation = useNavigation()

  const handleSubmit = () => {
    navigation.navigate('Root')
  }

  return (
    <Root>
      <FormContent>
        <Title>Entra com sua minha conta!</Title>
        <Spacer />

        <TextInput label="Email" mode="outlined" right={<TextInput.Icon name="account" />} />

        <Spacer />
        <TextInput
          secureTextEntry
          label="Senha"
          mode="outlined"
          right={<TextInput.Icon name="eye" />}
        />

        <Spacer />
        <Button icon="send" mode="contained" onPress={handleSubmit}>
          Entrar
        </Button>
      </FormContent>
    </Root>
  )
}

export default LoginPage
