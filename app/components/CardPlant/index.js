import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Paragraph, IconButton, Colors } from 'react-native-paper'

import { Card } from './styled'

const CardPlant = ({ _id, name, scientificName, img, description, showAction = true }) => {
  const navigation = useNavigation()

  const handleAction = () => {
    navigation.navigate('PlantDetails', { plantId: _id })
  }

  return (
    <Card mode="outlined">
      <Card.Cover source={{ uri: img }} />
      <Card.Title
        title={name}
        subtitle={scientificName}
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
