import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-paper'

import Spacer from '../../components/Spacer'
import Button from '../../components/Button'
import { Root, FormContent } from './styled'

const ProfilePasswordPage = () => {
  const navigation = useNavigation()

  const handleSubmit = () => {
    navigation.goBack()
  }

  return (
    <Root>
      <FormContent>
        <TextInput
          secureTextEntry
          name="password"
          label="Senha Atual"
          mode="outlined"
          right={<TextInput.Icon name="eye" />}
        />

        <Spacer />
        <TextInput
          secureTextEntry
          name="password"
          label="Nova Senha"
          mode="outlined"
          right={<TextInput.Icon name="eye" />}
        />

        <Spacer />
        <Button icon="send" mode="contained" onPress={handleSubmit}>
          Salvar
        </Button>

        <Spacer />
      </FormContent>
    </Root>
  )
}

export default ProfilePasswordPage
