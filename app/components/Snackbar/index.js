import React from 'react'

import { SnackbarStyled, Label } from './styled'

const Snackbar = ({ message, duration = 3500, ...rest }) => (
  <SnackbarStyled duration={duration} {...rest}>
    <Label>{message}</Label>
  </SnackbarStyled>
)

export default Snackbar
