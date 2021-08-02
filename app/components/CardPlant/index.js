import React from 'react'
import { Button, Title, Paragraph, IconButton, Colors } from 'react-native-paper'

import { Card } from './styled'

const CardPlant = ({ title, subtitle, uri, description, showAction = true }) => {
  const handleAction = () => {
    console.log('Action Pressed')
  }

  return (
    <Card mode="outlined">
      <Card.Cover source={{ uri }} />
      <Card.Title
        title={title}
        subtitle={subtitle}
        right={() =>
          showAction ? (
            <IconButton
              color={Colors.green600}
              icon="plus-circle-outline"
              size={28}
              onPress={handleAction}
            />
          ) : null
        }
      />

      <Card.Content>
        <Paragraph>{description}</Paragraph>
      </Card.Content>
    </Card>
  )
}

export default CardPlant
