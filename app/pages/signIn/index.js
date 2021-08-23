import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Title, TextInput } from 'react-native-paper'

import Spacer from '../../components/Spacer'
import Button from '../../components/Button'
import { Root, FormContent } from './styled'
import { Auth } from '../../services/api'

// assegura que o nome seja no formato 'Nome Sobrenome'
const isNameValid = (name) => {
  return /^[a-z\u00C0-\u02AB'´`]+\.?\s([a-z\u00C0-\u02AB'´`]+\.?\s?)+$/i.test(name.trimEnd())
}

export const toTitleCase = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ')
    .trimEnd()
}

const SignInPage = () => {
  const navigation = useNavigation()
  const [name, updateName] = useState('')
  const [email, updateEmail] = useState('')
  const [password, updatePassword] = useState('')

  const handleSubmit = async () => {
    if (isNameValid(name)) {
      const first = toTitleCase(name).split(' ').slice(0, 1).join(' ')
      const last = toTitleCase(name).split(' ').slice(1).join(' ')
      try {
        await Auth.register(first, last, email, password)
        navigation.navigate('Login')
      } catch (err) {
        alert(err)
      }
    }
  }

  const handleLogin = () => {
    navigation.navigate('Login')
  }

  return (
    <Root>
      <FormContent>
        <Title>Criar conta</Title>

        <Spacer />
        <TextInput
          label="Nome"
          mode="outlined"
          right={<TextInput.Icon name="account" />}
          value={name}
          onChangeText={(value) => updateName(value)}
        />

        <Spacer />
        <TextInput
          label="Email"
          mode="outlined"
          right={<TextInput.Icon name="email" />}
          value={email}
          onChangeText={(value) => updateEmail(value)}
        />

        <Spacer />
        <TextInput
          secureTextEntry
          name="password"
          label="Senha"
          mode="outlined"
          right={<TextInput.Icon name="eye" />}
          value={password}
          onChangeText={(value) => updatePassword(value)}
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
