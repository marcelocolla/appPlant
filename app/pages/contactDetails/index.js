import React from 'react'
import { Title, Card, IconButton, Divider } from 'react-native-paper'

import Snackbar from '../../components/Snackbar'
import { Root } from './styled'

const ContactDetailsPage = () => {
  const [visible, setVisible] = React.useState(false)

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

      <Title>Contact details</Title>

      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        message="Seguindo Lorena Franco!"
      />
    </Root>
  )
}

export default ContactDetailsPage
