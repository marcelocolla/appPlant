import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Title, TextInput } from 'react-native-paper'

import Spacer from '../../components/Spacer'
import Button from '../../components/Button'
import { Root, FormContent } from './styled'

const SignInPage = () => {
  const navigation = useNavigation()

  const handleSubmit = () => {
    navigation.navigate('Login')
  }

  const handleLogin = () => {
    navigation.navigate('Login')
  }

  return (
    <Root>
      <FormContent>
        <Title>Criar conta</Title>

        <Spacer />
        <TextInput label="Nome" mode="outlined" right={<TextInput.Icon name="account" />} />

        <Spacer />
        <TextInput label="Email" mode="outlined" right={<TextInput.Icon name="account" />} />

        <Spacer />
        <TextInput
          secureTextEntry
          name="password"
          label="Senha"
          mode="outlined"
          right={<TextInput.Icon name="eye" />}
        />

        <Spacer />
        <Button icon="send" mode="contained" onPress={handleSubmit}>
          Cadastrar
        </Button>

        <Spacer />
        <Button icon="account" onPress={handleLogin}>
          Já possui uma conta? Entrar
        </Button>
      </FormContent>
    </Root>
  )
}

export default SignInPage
