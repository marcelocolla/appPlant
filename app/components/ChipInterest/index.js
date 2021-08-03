import React from 'react'

import { Colors } from 'react-native-paper'

import { Chip } from './styled'

const ChipInterest = ({ item, selected, onHandler }) => {
  const icon = selected ? 'heart' : 'check'

  return (
    <Chip
      icon={icon}
      selected={selected}
      selectedColor={selected ? Colors.green100 : Colors.grey600}
      onPress={() => onHandler(item)}
    >
      {item.label}
    </Chip>
  )
}

export default ChipInterest
