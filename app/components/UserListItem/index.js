import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { List } from 'react-native-paper'

const UserListItem = ({ _id, name, email }) => {
  const navigation = useNavigation()

  const handleAction = () => {
    navigation.navigate('ContactDetails', { userId: _id })
  }

  return (
    <List.Item
      title={`${name.first} ${name.last}`}
      description={email}
      left={(props) => <List.Icon {...props} icon="account" />}
      onPress={handleAction}
    />
  )
}

export default UserListItem
