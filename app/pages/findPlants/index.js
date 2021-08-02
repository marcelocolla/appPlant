import React from 'react'
import { FlatList } from 'react-native'

import CardPlant from '../../components/CardPlant'
import SearchField from '../../components/SearchField'

import { Root } from './styled'

import data from '../../mock/plants'

const FindPlantsPage = () => {
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

export default FindPlantsPage
