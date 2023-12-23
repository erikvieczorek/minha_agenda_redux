import { FormEvent, SetStateAction, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createNewContact } from '../../store/reducers/contact'

import * as S from '../../styles'
import { ActionBar, Form, FormContainer } from './styles'

const FormList = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleClick = () => navigate('/')

  const [name, setName] = useState('')
  const [phone, setPhone] = useState(0)
  const [email, setEmail] = useState('')

  const NewContact = (e: FormEvent) => {
    e.preventDefault()
    dispatch(
      createNewContact({
        name,
        phone,
        email,
        isfavorite: false
      })
    )
    setName('')
    setPhone(0)
    setEmail('')
    navigate('/')
  }

  return (
    <S.MainContainer>
      <S.Header>
        <li>
          <S.Title>Adicionar novo contato</S.Title>
        </li>
      </S.Header>
      <FormContainer>
        <Form onSubmit={NewContact}>
          <S.Input
            value={name}
            onChange={(event: { target: { value: SetStateAction<string> } }) =>
              setName(event.target.value)
            }
            type="text"
            placeholder="Nome:"
            required
          />
          <S.Input
            value={phone === 0 ? '' : phone.toString()}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const inputValue = event.target.value;
              const numericValue = inputValue === '' ? 0 : parseInt(inputValue, 10);
              if (!isNaN(numericValue)) {
                setPhone(numericValue);
              }
            }}
            type="tel"
            placeholder="Telefone:"
            required
          />
          <S.Input
            value={email}
            onChange={(event: { target: { value: SetStateAction<string> } }) =>
              setEmail(event.target.value)
            }
            type="email"
            placeholder="E-mail: "
            required
          />
          <ActionBar>
            <button type="submit">
              <S.SaveIcon />
            </button>
            <S.CancelIcon onClick={handleClick} />
          </ActionBar>
        </Form>
      </FormContainer>
    </S.MainContainer>
  )
}

export default FormList
