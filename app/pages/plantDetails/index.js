import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { Card, IconButton, Title, Text } from 'react-native-paper'

import { AuthContext } from '../../contexts/AuthContext'
import { Plants, Users } from '../../services/api'

import { Root, Content, ContentDescription } from './styled'

const PlantDetailsPage = ({ route }) => {
  const { user, updateUser } = useContext(AuthContext)
  const [plant, updatePlant] = useState({})
  const [loading, updateLoading] = useState(true)

  const userHasPlant = (plant) => user.plants.includes(plant._id)

  const handleAddPlant = async () => {
    try {
      await Users.addPlant(plant._id)
      await updateUserState()
    } catch (err) {
      alert(err)
    }
  }

  const handleRemovePlant = async () => {
    try {
      await Users.removePlant(plant._id)
      await updateUserState()
    } catch (err) {
      alert(err)
    }
  }

  const updateUserState = async () => {
    try {
      const {
        data: { user },
      } = await Users.self()
      updateUser(user)
    } catch (err) {
      alert(err)
    }
  }

  const getPlant = async () => {
    updateLoading(true)
    const { plantId } = route.params
    const res = await Plants.getById(plantId)
    updatePlant(res.data.plant)
    updateLoading(false)
  }

  useEffect(() => {
    getPlant()
  }, [route.params])

  return !loading ? (
    <Root>
      <Card.Title
        title={plant.name}
        subtitle={plant.scientificName}
        right={(props) =>
          userHasPlant(plant) ? (
            <IconButton {...props} icon="trash-can-outline" onPress={handleRemovePlant} />
          ) : (
            <IconButton {...props} icon="plus-circle-outline" onPress={handleAddPlant} />
          )
        }
      />
      <Card.Cover source={{ uri: plant.img }} />

      <Content>
        <ContentDescription>
          <Title>Descrição</Title>
          <Text>{plant.description}</Text>
        </ContentDescription>
        <ContentDescription>
          <Title>Plantio</Title>
          <Text>Plantar em Março ou Abril.</Text>
          <Text>Regar todos os dias.</Text>
        </ContentDescription>
        <ContentDescription>
          <Title>Colheita</Title>
          <Text>Colher em Agosto ou Setembro.</Text>
        </ContentDescription>
      </Content>
    </Root>
  ) : (
    <ActivityIndicator />
  )
}

export default PlantDetailsPage
