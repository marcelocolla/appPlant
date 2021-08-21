import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Feather } from '@expo/vector-icons'

import { TextInput } from 'react-native'

import { Root, Container, CardInput, Footer, Button, BtnText, ButtonImg } from './styled'

const AddFeed = () => {
  const { control, handleSubmit, reset } = useForm()

  const handleCadastroDepoimento = async (form) => {
    console.log('form', form)
  }

  return (
    <Root>
      <Container>
        <CardInput>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={{ backgroundColor: '#eee', minHeight: 40 }}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                multiline={true}
                placeholder={`No que você está pensand hoje?`}
              />
            )}
            name="Feed"
          />
        </CardInput>
        <Footer>
          <ButtonImg>
            <Feather name="camera" size={24} color="#C0D1E0" style={{ marginLeft: 10 }} />
          </ButtonImg>

          <Button onPress={handleSubmit(handleCadastroDepoimento)}>
            <BtnText>Postar</BtnText>
          </Button>
        </Footer>
      </Container>
    </Root>
  )
}

export default AddFeed
