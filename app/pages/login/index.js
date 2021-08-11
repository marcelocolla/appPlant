import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Title, TextInput } from 'react-native-paper'

import Spacer from '../../components/Spacer'
import Button from '../../components/Button'
import { Root, FormContent } from './styled'

const LoginPage = () => {
  const navigation = useNavigation()

  const handleSubmit = () => {
    navigation.navigate('Feed')
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

        <Spacer sized={1.5} />
        <Button icon="account-plus" onPress={handleSignIn}>
          Não possui uma conta? Criar conta
        </Button>
      </FormContent>
    </Root>
  )
}

export default LoginPage
