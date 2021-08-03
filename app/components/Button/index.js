import React from 'react'

import { Button as ButtonBase } from 'react-native-paper'

const Button = ({ children, ...rest }) => (
  <ButtonBase contentStyle={{ height: 52 }} {...rest}>
    {children}
  </ButtonBase>
)

export default Button
