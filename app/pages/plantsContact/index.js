import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Text } from 'react-native'

import CardPlant from '../../components/CardPlant'
import Spacer from '../../components/Spacer'
import { Users } from '../../services/api'

import { Root } from './styled'

const sortPlantsByName = (a, b) => {
  return a.name <= b.name ? -1 : 1
}

const PlantsPage = ({ userId }) => {
  const [plants, updatePlants] = useState([])
  const [loading, updateLoading] = useState(true)

  const getPlants = async () => {
    updateLoading(true)
    updatePlants([])
    const res = await Users.getPlants(userId)
    if (res) updatePlants(res.data.plants.sort(sortPlantsByName))
    updateLoading(false)
  }

  useEffect(() => {
    getPlants()
  }, [])

  return (
    <Root>
      {!loading ? (
        plants.length > 0 ? (
          <FlatList
            data={plants}
            renderItem={({ item }) => <CardPlant {...item} showAction={false} />}
            keyExtractor={(item) => item._id}
            ListHeaderComponent={<Spacer sized={2} />}
          />
        ) : (
          <Text>Este usuário não adicionou nenhuma planta.</Text>
        )
      ) : (
        <ActivityIndicator />
      )}
    </Root>
  )
}

export default PlantsPage
