import React from 'react'
import { Divider, List, Avatar, Colors } from 'react-native-paper'

import { Root, BoxAvatar } from './styled'

const ProfilePage = () => {
  return (
    <Root>
      <BoxAvatar>
        <Avatar.Text size={88} label="GM" color={Colors.green200} />
      </BoxAvatar>

      <List.Item title="Cadastrado em" description="17 de julho 2021" />
      <List.Item
        title="Gustavo Macedo"
        description="Gustavo.macedo@gmail.com"
        right={(props) => <List.Icon {...props} icon="account-edit-outline" />}
      />
      <List.Item
        title="Alterar senha"
        right={(props) => <List.Icon {...props} icon="lock-outline" />}
      />
      <List.Item
        title="Logout"
        description="Desconectar na sua conta"
        right={(props) => <List.Icon {...props} icon="exit-to-app" />}
      />
      <Divider />
      <List.Item title="Minhas Plantas" description="15 plantas" />
      <List.Item title="Meus amigos" description="22 amigos" />
    </Root>
  )
}

export default ProfilePage
