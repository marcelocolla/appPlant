import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'

import CardPlant from '../../components/CardPlant'
import Spacer from '../../components/Spacer'
import { AuthContext } from '../../contexts/AuthContext'
import { Users } from '../../services/api'

import { Root } from './styled'

const sortPlantsByName = (a, b) => {
  return a.name <= b.name ? -1 : 1
}

const PlantsPage = () => {
  const { user } = useContext(AuthContext)
  const [plants, updatePlants] = useState([])
  const [loading, updateLoading] = useState(true)

  const getPlants = async () => {
    updateLoading(true)
    updatePlants([])
    const res = await Users.getPlants(user._id)
    if (res) updatePlants(res.data.plants.sort(sortPlantsByName))
    updateLoading(false)
  }

  useEffect(() => {
    getPlants()
  }, [user])

  return (
    <Root>
      {!loading ? (
        plants.length > 0 ? (
          <FlatList
            data={plants}
            renderItem={({ item }) => <CardPlant {...item} showAction={true} />}
            keyExtractor={(item) => item._id}
            ListHeaderComponent={<Spacer sized={2} />}
          />
        ) : (
          <Text>Você não adicionou nenhuma planta.</Text>
        )
      ) : (
        <ActivityIndicator />
      )}
    </Root>
  )
}

export default PlantsPage
