import React from 'react'
import styled from 'styled-components/native'
import theme from '../../theme'

export const Root = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
  justify-content: center;
`

export const FormContent = styled.View`
  padding: 24px;
`

export const Spacer = styled.View`
  height: 16px;
`
