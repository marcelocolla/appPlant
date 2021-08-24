import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { Divider } from 'react-native-paper'

import SearchField from '../../components/SearchField'
import UserListItem from '../../components/UserListItem'
import { Users } from '../../services/api'

import { Root } from './styled'

const FindContactsPage = () => {
  const [users, updateUsers] = useState([])
  const [loading, updateLoading] = useState(false)

  const getUsers = async () => {
    updateLoading(true)
    updateUsers([])
    const res = await Users.getByName('')
    updateUsers(res.data.user)
    updateLoading(false)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return !loading ? (
    <Root>
      <SearchField />

      <FlatList
        data={users}
        renderItem={({ item }) => <UserListItem {...item} />}
        ItemSeparatorComponent={() => <Divider />}
        keyExtractor={(item) => item._id}
      />
    </Root>
  ) : (
    <ActivityIndicator />
  )
}

export default FindContactsPage
