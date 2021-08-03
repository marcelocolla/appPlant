import React, { useState } from 'react'
import { FlatList } from 'react-native'

import CardPlant from '../../components/CardPlant'
import SearchField from '../../components/SearchField'
import ChipInterest from '../../components/ChipInterest'

import { Root, BoxCategories } from './styled'

import plants from '../../mock/plants'
import interests from '../../mock/interests'

const FindPlantsPage = () => {
  const [selected, setSelected] = useState([])

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

      <FlatList
        data={plants}
        renderItem={({ item }) => <CardPlant {...item} />}
        keyExtractor={(item) => item.id}
      />
    </Root>
  )
}

export default FindPlantsPage
