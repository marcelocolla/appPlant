import React, { useState } from 'react'
import { Card, IconButton, Divider } from 'react-native-paper'

import Snackbar from '../../components/Snackbar'

import ButtonTab from './ButtonTab'
import PlantsContact from '../plantsContact'
import FeedContact from '../feedContact'
import InterestsContact from '../interestsContact'

import { Root, BoxOptions } from './styled'

const ContactDetailsPage = () => {
  const [visible, setVisible] = React.useState(false)

  const [menu, setMenu] = useState('1')

  const onHandleMenu = (menu) => {
    setMenu(menu)
  }

  const handleAction = () => {
    setVisible(true)
  }

  return (
    <Root>
      <Card.Title
        title="Lorena Franco"
        subtitle="Eduarda98@gmail.com"
        right={(props) => <IconButton {...props} icon="account-plus" onPress={handleAction} />}
      />

      <Divider />

      <BoxOptions>
        <ButtonTab label="Plantas" tabName="1" tabActive={menu} onHandler={onHandleMenu} />
        <ButtonTab label="Publicações" tabName="2" tabActive={menu} onHandler={onHandleMenu} />
        <ButtonTab label="Interesses" tabName="3" tabActive={menu} onHandler={onHandleMenu} />
      </BoxOptions>

      {menu === '1' && <PlantsContact />}
      {menu === '2' && <FeedContact />}
      {menu === '3' && <InterestsContact />}

      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        message="Seguindo Lorena Franco!"
      />
    </Root>
  )
}

export default ContactDetailsPage
