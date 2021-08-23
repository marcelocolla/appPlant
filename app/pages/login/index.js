import { useNavigation } from '@react-navigation/native'
import React, { useContext, useState } from 'react'
import { Title, TextInput } from 'react-native-paper'

import Spacer from '../../components/Spacer'
import Button from '../../components/Button'
import { AuthContext } from '../../contexts/AuthContext'

import { Root, FormContent } from './styled'

const LoginPage = () => {
  const navigation = useNavigation()
  const { signIn } = useContext(AuthContext)
  const [email, updateEmail] = useState('')
  const [password, updatePassword] = useState('')

  const handleSubmit = async () => {
    try {
      await signIn(email, password)
      navigation.navigate('Feed')
    } catch (err) {
      alert(err)
    }
  }

  const handleSignIn = () => {
    navigation.navigate('SignIn')
  }

  return (
    <Root>
      <FormContent>
        <Title>Entrar</Title>
        <Spacer />

        <TextInput
          label="Email"
          mode="outlined"
          right={<TextInput.Icon name="account" />}
          value={email}
          onChangeText={(value) => updateEmail(value)}
        />

        <Spacer />
        <TextInput
          secureTextEntry
          label="Senha"
          mode="outlined"
          right={<TextInput.Icon name="eye" />}
          value={password}
          onChangeText={(value) => updatePassword(value)}
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
