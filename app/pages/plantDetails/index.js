import React from 'react'
import { Card, IconButton, Title, Text } from 'react-native-paper'

import { Root, Content, ContentDescription } from './styled'

const PlantDetailsPage = ({ plantId }) => {
  console.log('plantId', plantId)

  const handleAction = () => {}

  return (
    <Root>
      <Card.Title
        title="Nome da planta"
        subtitle="descrição"
        right={(props) => (
          <IconButton {...props} icon="plus-circle-outline" onPress={handleAction} />
        )}
      />
      <Card.Cover
        source={{ uri: 'https://www.greenme.com.br/wp-content/uploads/2020/11/boldo-do-chile.jpg' }}
      />

      <Content>
        <ContentDescription>
          <Title>Descrição</Title>
          <Text>
            A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim
            utilizado na produção gráfica para preencher os espaços de texto em publicações para
            testar e ajustar aspectos visuais antes de utilizar conteúdo real.
          </Text>
        </ContentDescription>
        <ContentDescription>
          <Title>Dicas de culinária</Title>
          <Text>
            A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim
            utilizado na produção gráfica para preencher os espaços de texto em publicações para
            testar e ajustar aspectos visuais antes de utilizar conteúdo real.
          </Text>
        </ContentDescription>
      </Content>
    </Root>
  )
}

export default PlantDetailsPage
