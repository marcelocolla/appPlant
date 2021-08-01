import React from 'react'

import { ButtonStyled } from './styled'

const Button = ({ children, ...rest }) => <ButtonStyled {...rest}>{children}</ButtonStyled>

export default Button
