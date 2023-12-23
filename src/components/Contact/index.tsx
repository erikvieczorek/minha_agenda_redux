import { useEffect, useState, SetStateAction } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import ContactClass from '../../models/Contact'
import { remove, edit } from '../../store/reducers/contact'
import {
  CancelIcon,
  EditIcon,
  SaveIcon,
  DeleteIcon,
  FavoriteIcon,
} from '../../styles'

type Props = ContactClass & {
  isfavorite: boolean
  onToggleFavorite: () => void
}

const Contact = ({
  name: originalName,
  phone: originalPhone,
  email: originalEmail,
  id,
  isfavorite,
  onToggleFavorite,
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState<number>(0)
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (
      originalName.length > 0 &&
      originalEmail.length > 0 &&
      originalPhone > 0
    ) {
      setName(originalName)
      setEmail(originalEmail)
      setPhone(originalPhone)
    }
  }, [originalName, originalEmail, originalPhone])

  function cancelEditing() {
    setIsEditing(false)
  }

  return (
    <S.Card>
      <S.ContainerInfo>
        <S.InfoItem>
          <S.ContactIcon />
          <S.Info
            className={isEditing ? 'editing' : ''}
            disabled={!isEditing}
            value={name}
            onChange={(event: { target: { value: SetStateAction<string> } }) =>
              setName(event.target.value)
            }
          />
        </S.InfoItem>
        <S.InfoItem>
          <S.PhoneIcon />
          <S.Info
            className={isEditing ? 'editing' : ''}
            disabled={!isEditing}
            value={phone === null ? '' : phone.toString()}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
              const inputValue = event.target.value
              const numericValue = parseInt(inputValue, 10)
              if (!isNaN(numericValue)) {
                setPhone(numericValue)
              } else if (inputValue === '') {
                setPhone(0)
              }
            }}
          />
        </S.InfoItem>
        <S.InfoItem>
          <S.EmailIcon />
          <S.Info
            className={isEditing ? 'editing' : ''}
            disabled={!isEditing}
            value={email}
            onChange={(event: { target: { value: SetStateAction<string> } }) =>
              setEmail(event.target.value)
            }
          />
        </S.InfoItem>
      </S.ContainerInfo>
      <S.ActionBar>
        <FavoriteIcon isfavorite={isfavorite} onClick={onToggleFavorite} />
        {isEditing ? (
          <>
            <SaveIcon
              onClick={() => {
                dispatch(edit({ name, phone, email, id, isfavorite }))
                setIsEditing(false)
              }}
            />
            <CancelIcon onClick={cancelEditing} />
          </>
        ) : (
          <>
            <EditIcon onClick={() => setIsEditing(true)} />
            <DeleteIcon onClick={() => dispatch(remove(id))} />
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Contact
