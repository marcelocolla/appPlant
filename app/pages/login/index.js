import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Title, TextInput, Button } from 'react-native-paper'

import { Root, FormContent, Spacer } from './styled'

const LoginPage = () => {
  const navigation = useNavigation()

  const handleSubmit = () => {
    navigation.navigate('Root')
  }

  const handleSignIn = () => {
    navigation.navigate('SignIn')
  }

  return (
    <Root>
      <FormContent>
        <Title>Entrar</Title>
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

        <Spacer />
        <Button icon="account-plus" onPress={handleSignIn}>
          Ainda não possui uma conta? Criar conta
        </Button>
      </FormContent>
    </Root>
  )
}

export default LoginPage
