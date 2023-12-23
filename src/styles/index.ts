import styled, { createGlobalStyle, keyframes } from 'styled-components'
import { FaUserTimes, FaUserCheck, FaRegTrashAlt, FaUserEdit, FaStar } from "react-icons/fa"
import variables from './variables'

interface Props {
  isfavorite: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
`

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Prompt', sans-serif;
    overflow-x: hidden;
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 280px auto;
  width: 1024px;
  height: 100vh;
  background-color: ${variables.LighterGrey};;
  letter-spacing: 1px;
  border: 4px solid  ${variables.DarkGrey};
  border-radius: 0 60px;
  box-shadow: inset 0 0 8px  ${variables.DarkGrey};

  @media screen and (max-width:768px) {
    width: 768px;
  }

  @media screen and (max-width: 640px) {
    display: block;
    width: 640px;
    max-width: 100%;
  }
`

export const MainContainer = styled.main`
  display: block;
  width: 100%;
  border: none;
`
export const ContactsContainer = styled.ul`
  overflow-y: scroll;
  height: 90%;
  width: 100%;

`
export const Header = styled.ul`
  display: flex;
  height: 10%;
  width: 100%;

  li {
    width: 100%;
    display: flex;
    align-items: center;
  }
`

export const Title = styled.h1`
  color:  ${variables.DarkBlue};
  font-size: 42px;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media screen and (max-width:768px) {
  font-size: 32px;
  }

  @media screen and (max-width: 640px) {
    font-size: 26px;
    padding: 12px 0;
  }
`

export const Input = styled.input`
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 16px;
  padding: 6px 10px;
  margin-bottom: 16px;
  border: none;
  border-radius: 50px;
  outline: none;
  background-color: #fff;
  letter-spacing: 1px;
  border: 2px solid  ${variables.DarkBlue};
  box-shadow: inset 0 0 4px ${variables.DarkBlue}, 0 0 4px ${variables.DarkBlue};
`
export const Info = styled.li`
  display: flex;
  width: 400px;
  font-size: 24px;
`
export const EditButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  padding: 6px 10px;
  border-radius: 50px;
  border: 2px solid  ${variables.DarkBlue};
  color:  ${variables.DarkBlue};
  background-color: ${variables.LighterGrey};;
  cursor: pointer;
  letter-spacing: 1px;
  box-shadow: inset 0 0 4px ${variables.DarkBlue}, 0 0 4px ${variables.DarkBlue};
`

export const SaveIcon = styled(FaUserCheck)`
  font-size: 32px;
  cursor: pointer;
  margin-left: 6px;
  animation: ${fadeIn} 0.5s ease-in-out;

`
export const CancelIcon = styled(FaUserTimes)`
  font-size: 32px;
  cursor: pointer;
  margin-left: 6px;
  color: ${variables.Red};
  animation: ${fadeIn} 0.5s ease-in-out;
`
export const EditIcon = styled(FaUserEdit)`
  font-size: 32px;
  cursor: pointer;
  margin-left: 6px;
  color:  ${variables.Orange};
  animation: ${fadeIn} 0.5s ease-in-out;
`

export const DeleteIcon = styled(FaRegTrashAlt)`
  font-size: 32px;
  cursor: pointer;
  color:  ${variables.Red};
  animation: ${fadeIn} 0.3s ease-in-out;
`
export const FavoriteIcon = styled(FaStar)<Props>`
  color: ${(props) => (props.isfavorite ? 'gold' : 'gray')};
  cursor: pointer;
  font-size: 28px;
  animation: ${fadeIn} 0.5s ease-in-out;
`

export default GlobalStyle
