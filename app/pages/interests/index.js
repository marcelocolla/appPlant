import React, { useState } from 'react'
import ChipInterest from '../../components/ChipInterest'

import { Root, BoxList } from './styled'

import data from '../../mock/interests'

const InterestsPage = () => {
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
    </Root>
  )
}

export default InterestsPage
