import React from 'react'
import { Button, Title, Paragraph, IconButton, Colors } from 'react-native-paper'

import { Card } from './styled'

const CardPlant = ({ title, subtitle, uri, description }) => {
  const handleAction = () => {
    console.log('Action Pressed')
  }

  return (
    <Card mode="outlined">
      <Card.Cover source={{ uri }} />
      <Card.Title
        title={title}
        subtitle={subtitle}
        right={() => (
          <IconButton
            color={Colors.green600}
            icon="plus-circle-outline"
            size={28}
            onPress={handleAction}
          />
        )}
      />

      <Card.Content>
        <Paragraph>{description}</Paragraph>
      </Card.Content>
    </Card>
  )
}

export default CardPlant
