import React from 'react'
import { FlatList } from 'react-native'

import CardFeed from '../../components/CardFeed'
import Spacer from '../../components/Spacer'

import { Root } from './styled'

import data from '../../mock/feeds'

const FeedPage = () => {
  return (
    <Root>
      <FlatList
        data={data}
        renderItem={({ item }) => <CardFeed {...item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Spacer sized={2} />}
      />
    </Root>
  )
}

export default FeedPage
