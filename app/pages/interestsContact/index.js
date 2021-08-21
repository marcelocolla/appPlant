import React, { useState } from 'react'
import ChipInterest from '../../components/ChipInterest'

import { Root, Content, BoxList } from './styled'

import data from '../../mock/interests'

const InterestsPage = () => {
  return (
    <Root>
      <Content>
        <BoxList>
          {data.map((item) => (
            <ChipInterest key={item.id} item={item} selected={true} />
          ))}
        </BoxList>
      </Content>
    </Root>
  )
}

export default InterestsPage
