import { FaRegEnvelope, FaRegUser, FaPhone } from "react-icons/fa"
import styled from 'styled-components'
import variables from "../../styles/variables"

export const Card = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  width: 94%;
  background-color:  ${variables.DarkBlue};
  border-radius: 50px;
  padding: 6px 0;
  margin-bottom: 18px;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
  color:  ${variables.Green};
`

export const ContactIcon = styled(FaRegUser)`
  margin: 0;
  font-size: 24px;
`
export const PhoneIcon = styled(FaPhone)`
  margin: 0;
  font-size: 24px;
`
export const EmailIcon = styled(FaRegEnvelope)`
  font-size: 24px;
  margin: 0;
`

export const ActionBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const ContainerInfo = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const InfoItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px;
  padding-left: 42px;
  width: 100%;
  `

export const Info = styled.textarea`
  color:  ${variables.LighterGrey};
  font-size: 20px;
  resize: none;
  width: 100%;
  border: none;
  border-radius: 32px;
  padding: 0 12px;
  margin-left: 12px;
  background-color: transparent;
  outline: none;
  height: 32px;
  transition: color 0.5s ease, background-color 0.5s ease;

  &.editing {
    color:  ${variables.DarkBlue};
    background-color:  ${variables.LighterGrey};
  }
  `
