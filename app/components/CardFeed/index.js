import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Avatar, Paragraph, IconButton } from 'react-native-paper'

import Spacer from '../Spacer'
import { Card } from './styled'

const CardFeed = ({ title, subtitle, uri, description }) => {
  const navigation = useNavigation()

  const handleAction = () => {
    navigation.navigate('ContactDetails', { userId: '1' })
  }

  return (
    <Card mode="outlined">
      <Card.Title
        title={title}
        subtitle={subtitle}
        left={(props) => <Avatar.Icon {...props} icon="account" />}
        right={(props) => <IconButton {...props} icon="arrow-right" onPress={handleAction} />}
      />

      <Card.Cover source={{ uri }} />

      <Card.Content>
        <Spacer sized={0.5} />
        <Paragraph>{description}</Paragraph>
      </Card.Content>
    </Card>
  )
}

export default CardFeed
