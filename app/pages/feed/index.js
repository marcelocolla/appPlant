import React from 'react'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import CardFeed from '../../components/CardFeed'
import Spacer from '../../components/Spacer'
import Fab from '../../components/Fab'

import { Root } from './styled'

import data from '../../mock/feeds'

const FeedPage = () => {
  const navigation = useNavigation()

  const onHandleAddFeed = () => {
    navigation.navigate('FindPlants')
  }

  return (
    <Root>
      <FlatList
        data={data}
        renderItem={({ item }) => <CardFeed {...item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Spacer sized={2} />}
      />

      <Fab onPress={onHandleAddFeed} />
    </Root>
  )
}

export default FeedPage
