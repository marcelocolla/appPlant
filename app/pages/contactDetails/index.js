import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { Card, IconButton, Divider } from 'react-native-paper'

import Snackbar from '../../components/Snackbar'

import ButtonTab from './ButtonTab'
import PlantsContact from '../plantsContact'
import FeedContact from '../feedContact'
import InterestsContact from '../interestsContact'

import { Root, BoxOptions } from './styled'
import { Users } from '../../services/api'

const ContactDetailsPage = ({ route }) => {
  const [visible, setVisible] = React.useState(false)
  const [user, updateUser] = useState({})
  const [loading, updateLoading] = useState(true)

  const [menu, setMenu] = useState('1')

  const onHandleMenu = (menu) => {
    setMenu(menu)
  }

  const handleAction = () => {
    setVisible(true)
  }

  const getUser = async () => {
    updateLoading(true)
    const { userId } = route.params
    const res = await Users.getById(userId)
    updateUser(res.data.user)
    updateLoading(false)
  }

  useEffect(() => {
    getUser()
  }, [route.params])

  return !loading ? (
    <Root>
      <Card.Title
        title={`${user.name.first} ${user.name.last}`}
        subtitle={user.email}
        right={(props) => <IconButton {...props} icon="account-plus" onPress={handleAction} />}
      />

      <Divider />

      <BoxOptions>
        <ButtonTab label="Plantas" tabName="1" tabActive={menu} onHandler={onHandleMenu} />
        <ButtonTab label="Publicações" tabName="2" tabActive={menu} onHandler={onHandleMenu} />
        <ButtonTab label="Interesses" tabName="3" tabActive={menu} onHandler={onHandleMenu} />
      </BoxOptions>

      {menu === '1' && <PlantsContact userId={user._id} />}
      {menu === '2' && <FeedContact />}
      {menu === '3' && <InterestsContact />}

      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        message="Seguindo Lorena Franco!"
      />
    </Root>
  ) : (
    <ActivityIndicator />
  )
}

export default ContactDetailsPage
