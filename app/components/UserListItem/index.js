import React from 'react'

import { List } from 'react-native-paper'

const UserListItem = ({ title, info }) => {
  return (
    <List.Item
      title={title}
      description={info}
      left={(props) => <List.Icon {...props} icon="account" />}
    />
  )
}

export default UserListItem
