import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { Divider, List, Avatar, Colors } from 'react-native-paper'

import { AuthContext } from '../../contexts/AuthContext'

import { Root, BoxAvatar } from './styled'

const ProfilePage = () => {
  const navigation = useNavigation()
  const { user, signOut } = useContext(AuthContext)

  const handleEdit = () => {
    navigation.navigate('ProfileEdit')
  }

  const handlePassword = () => {
    navigation.navigate('ProfilePassword')
  }

  const getLabel = () => {
    const first = user.name.first.charAt(0)
    const last = user.name.last.charAt(0)
    return first + last
  }

  const getCreatedAt = () => {
    // to do: formatacao da data
    return user.createAt
  }

  return (
    <Root>
      <BoxAvatar>
        <Avatar.Text size={88} label={getLabel()} color={Colors.green200} />
      </BoxAvatar>

      <List.Item title="Cadastrado em" description={getCreatedAt()} />
      <List.Item
        title={`${user.name.first} ${user.name.last}`}
        description={user.email}
        right={(props) => <List.Icon {...props} icon="account-edit-outline" />}
        onPress={handleEdit}
      />
      <List.Item
        title="Alterar senha"
        right={(props) => <List.Icon {...props} icon="lock-outline" />}
        onPress={handlePassword}
      />
      <List.Item
        title="Logout"
        description="Desconectar na sua conta"
        right={(props) => <List.Icon {...props} icon="exit-to-app" />}
        onPress={async () => {
          await signOut(navigation)
        }}
      />
      <Divider />
      <List.Item
        title="Minhas Plantas"
        description={`${user.plants.length} plantas`}
        onPress={() => navigation.navigate('Plants')}
      />
      <List.Item title="Meus amigos" description="22 amigos" />
    </Root>
  )
}

export default ProfilePage
