import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variables from '../../styles/variables'

export const AddButton = styled(Link)`
  display: flex;
  font-size: 42px;
  color: #3da234;
  color: ${variables.Green};

  @media screen and (max-width: 640px) {
    font-size: 30px;
  }
`
