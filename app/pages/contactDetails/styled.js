import React from 'react'
import styled, { css } from 'styled-components/native'
import theme from '../../theme'

const colorActive = ({ active }) =>
  active &&
  css`
    color: ${theme.colors.appBar};
  `

const borderColorActive = ({ active }) =>
  active &&
  css`
    border-bottom-color: ${theme.colors.appBar};
  `

export const Root = styled.View`
  flex: 1;
  background-color: #fff;
`
export const BoxOptions = styled.View`
  flex-direction: row;
  background-color: #fff;
  height: 71px;
  align-items: center;
  justify-content: space-between;
`

export const CardStatus = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Button = styled.TouchableOpacity`
  color: #5b5b5b;
  border-bottom-width: 4px;
  border-bottom-color: #5b5b5b;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  flex: 1;
  ${borderColorActive}
`
export const Title = styled.Text`
  color: #5b5b5b;
  margin: 6px 0;
  font-size: 18px;
  ${colorActive}
`
