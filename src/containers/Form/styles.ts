import styled from 'styled-components'
import variables from '../../styles/variables'

export const ActionBar = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 10px;
  background-color: ${variables.DarkBlue};

  button {
    background: none;
    border: none;
    padding: 0;
    color: ${variables.Green};
  }
`
export const Form = styled.form`
  border-radius: 50px;
  padding: 24px 38px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  background-color: ${variables.DarkBlue};
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
`
export const FormContainer = styled.div`
  width: 94%;
`
