import styled from 'styled-components/native'
import theme from '../../theme'

export const Root = styled.View`
  min-height: 120px;
  background-color: #fff;
  margin: 20px;

  border-radius: 12px;
  box-shadow: 10px 10px 10px rgba(25, 50, 47, 0.08);
`
export const Container = styled.View`
  background-color: ${theme.colors.white};
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
`

export const CardInput = styled.View`
  margin-bottom: 20px;
`

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ButtonImg = styled.TouchableOpacity``

export const Button = styled.TouchableOpacity`
  background-color: ${theme.colors.appBar};
  width: 80px;

  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 6px;
`
export const BtnText = styled.Text`
  color: ${theme.colors.white};
`
