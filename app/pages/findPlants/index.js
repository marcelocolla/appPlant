import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Text } from 'react-native'

import CardPlant from '../../components/CardPlant'
import SearchField from '../../components/SearchField'
import ChipInterest from '../../components/ChipInterest'
import interests from '../../mock/interests'
import { Plants } from '../../services/api'

import { Root, BoxCategories } from './styled'

const sortPlantsByName = (a, b) => {
  return a.name <= b.name ? -1 : 1
}

const FindPlantsPage = () => {
  const [selected, setSelected] = useState([])
  const [plants, updatePlants] = useState([])
  const [loading, updateLoading] = useState(true)

  const handleSelect = (select) => {
    const index = selected.findIndex((item) => item.id === select.id)

    if (index >= 0) {
      const items = [...selected]

      items.splice(index, 1)

      setSelected(items)
    } else {
      setSelected([...selected, select])
    }
  }

  const hasSelected = (id) => {
    return selected.some((item) => item.id === id)
  }

  const getPlants = async () => {
    updateLoading(true)
    updatePlants([])
    const res = await Plants.getAll()
    if (res) updatePlants(res.data.plants.sort(sortPlantsByName))
    updateLoading(false)
  }

  useEffect(() => {
    getPlants()
  }, [])

  return (
    <Root>
      <SearchField />

      <BoxCategories>
        <FlatList
          horizontal
          data={interests}
          renderItem={({ item }) => (
            <ChipInterest item={item} selected={hasSelected(item.id)} onHandler={handleSelect} />
          )}
          keyExtractor={(item) => item.id}
        />
      </BoxCategories>
      {!loading ? (
        plants.length > 0 ? (
          <FlatList
            data={plants}
            renderItem={({ item }) => <CardPlant {...item} />}
            keyExtractor={(item) => item._id}
          />
        ) : (
          <Text>Nenhuma planta foi encontrada.</Text>
        )
      ) : (
        <ActivityIndicator />
      )}
    </Root>
  )
}

export default FindPlantsPage
