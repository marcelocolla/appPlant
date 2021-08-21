import React from 'react'
import { FlatList } from 'react-native'

import CardPlant from '../../components/CardPlant'
import Spacer from '../../components/Spacer'

import { Root } from './styled'

import data from '../../mock/plants'

const PlantsPage = () => {
  return (
    <Root>
      <FlatList
        data={data}
        renderItem={({ item }) => <CardPlant {...item} showAction={false} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Spacer sized={2} />}
      />
    </Root>
  )
}

export default PlantsPage
