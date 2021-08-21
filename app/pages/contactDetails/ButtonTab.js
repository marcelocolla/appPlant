import React from 'react'

import { Button, CardStatus, Title } from './styled'

const ButtonTab = ({ tabName, tabActive, label, onHandler }) => {
  const active = tabName === tabActive

  const handleTab = () => {
    onHandler(tabName)
  }

  return (
    <Button onPress={handleTab} active={active}>
      <CardStatus>
        <Title active={active}>{label}</Title>
      </CardStatus>
    </Button>
  )
}

export default ButtonTab
