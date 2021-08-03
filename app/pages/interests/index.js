import React, { useState } from 'react'
import { Divider } from 'react-native-paper'

import Button from '../../components/Button'
import ChipInterest from '../../components/ChipInterest'

import { Root, Content, BoxList, Footer } from './styled'

import data from '../../mock/interests'

const InterestsPage = () => {
  const [selected, setSelected] = useState([])

  const handleSave = () => {
    // --
  }

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
      <Content>
        <BoxList>
          {data.map((item) => (
            <ChipInterest
              key={item.id}
              item={item}
              selected={hasSelected(item.id)}
              onHandler={handleSelect}
            />
          ))}
        </BoxList>
      </Content>

      <Divider />
      <Footer>
        <Button mode="contained" onPress={handleSave}>
          Salvar
        </Button>
      </Footer>
    </Root>
  )
}

export default InterestsPage
