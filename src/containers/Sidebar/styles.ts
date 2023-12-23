import styled from 'styled-components'
import variables from '../../styles/variables'


export const Aside = styled.aside`
  background-color:  ${variables.DarkGrey};
  height: 100%;
  width: 100%;
  padding: 10vh 20px 0 16px;
  border: none;
`

export const FavoriteButton = styled.button`
  display: flex;
  justify-content: center;
  font-size: 16px;
  width: 100%;
  font-weight: 500;
  padding: 6px 10px;
  border-radius: 50px;
  border: 2px solid ${variables.DarkBlue};
  color: ${variables.DarkBlue};
  background-color: ${variables.Yellow};
  cursor: pointer;
  letter-spacing: 1px;
  box-shadow: inset 0 0 4px ${variables.DarkBlue};
  transition: border 0.3s, color 0.3s, box-shadow 0.3s;
`
