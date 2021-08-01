import React from 'react'
import { FlatList } from 'react-native'

import CardPlant from '../../components/CardPlant'
import SearchField from '../../components/SearchField'

import { Root, Title } from './styled'

const MainPage = () => {
  const data = [
    {
      id: '1',
      title: 'Alecrim',
      subtitle: 'Salvia rosmarinus',
      uri: 'https://rnews.com.br/wp-content/uploads/2020/02/Plantas.jpg',
      description:
        'O alecrim é uma erva aromática comum na região do Mediterrâneo ocorrendo dos 0 a 1500 metros de altitude, preferencialmente em solos de origem calcária.',
    },
    {
      id: '2',
      title: 'Alçafrão-da-terra',
      subtitle: 'Curcuma longa',
      uri: 'https://s2.glbimg.com/tgUt9vU0h5tb5KFV0yImJB9QLIg=/0x0:1254x836/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/E/b/BYKQ5rSZWMCx70tjhpvw/curcuma.jpg',
      description:
        'O açafrão-da-terra, conhecido também como cúrcuma, turmérico, raiz-de-sol, açafrão-da-índia, açafroa e gengibre amarelo, é uma planta herbácea da família do gengibre, originária da Ásia.',
    },
    {
      id: '3',
      title: 'Boldo-do-chile',
      subtitle: 'Peumus boldus',
      uri: 'https://www.greenme.com.br/wp-content/uploads/2020/11/boldo-do-chile.jpg',
      description:
        'O boldo-do-chile é uma árvore que atinge de 12 a 15 metros de altura e pertence à família das Monimiaceae.',
    },
  ]

  return (
    <Root>
      <SearchField />

      <FlatList
        data={data}
        renderItem={({ item }) => <CardPlant {...item} />}
        keyExtractor={(item) => item.id}
      />
    </Root>
  )
}

export default MainPage
