import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-paper'

import Spacer from '../../components/Spacer'
import Button from '../../components/Button'
import { Root, FormContent } from './styled'

const ProfileEditPage = () => {
  const navigation = useNavigation()

  const handleSubmit = () => {
    navigation.goBack()
  }

  return (
    <Root>
      <FormContent>
        <TextInput label="Nome" mode="outlined" right={<TextInput.Icon name="account" />} />

        <Spacer />
        <TextInput label="Email" mode="outlined" right={<TextInput.Icon name="email" />} />

        <Spacer />
        <Button icon="send" mode="contained" onPress={handleSubmit}>
          Salvar
        </Button>

        <Spacer />
      </FormContent>
    </Root>
  )
}

export default ProfileEditPage
