import styled, { css } from 'styled-components/native'
import { Chip as ChipBase } from 'react-native-paper'
import theme from '../../theme'

export const Chip = styled(ChipBase)`
  margin: 8px 4px;
  padding: 2px;
  height: 38px;
  border-radius: 32px;

  ${(props) =>
    props.selected &&
    css`
      background-color: ${theme.colors.appBar};
    `}
`
