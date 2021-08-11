import React from 'react'
import { FlatList } from 'react-native'
import { Divider } from 'react-native-paper'

import SearchField from '../../components/SearchField'
import UserListItem from '../../components/UserListItem'

import { Root } from './styled'

import data from '../../mock/contacts'

const FindContactsPage = () => {
  return (
    <Root>
      <SearchField />

      <FlatList
        data={data}
        renderItem={({ item }) => <UserListItem {...item} />}
        ItemSeparatorComponent={() => <Divider />}
        keyExtractor={(item) => item.id}
      />
    </Root>
  )
}

export default FindContactsPage
