import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Paragraph, IconButton, Colors } from 'react-native-paper'

import { Card } from './styled'

const CardPlant = ({ title, subtitle, uri, description, showAction = true }) => {
  const navigation = useNavigation()

  const handleAction = () => {
    navigation.navigate('PlantDetails', { plantId: '123' })
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
              icon="arrow-right"
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
