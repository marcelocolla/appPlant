import React from 'react'
import styled from 'styled-components/native'

const sizeSpacer = ({ sized }) => `${sized * 16}px`

export const Root = styled.View`
  height: ${sizeSpacer};
`
