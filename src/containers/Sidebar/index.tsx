import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import * as S from './styles';
import { EditButton, Input } from '../../styles'
import { contactFilter, showAllContacts, showFavorites } from '../../store/reducers/filter'

type Props = {
  showSearchBar: boolean
}

const Sidebar = ({ showSearchBar }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleClick = () => navigate('/')
  const { input, showFavorites: isShowingFavorites } = useSelector((state: RootReducer) => state.filter)

  const showAllContactsClick = () => {
    dispatch(contactFilter(''))
    dispatch(showAllContacts())
  }

  const showFavoritesClick = () => {
    dispatch(contactFilter(''))
    dispatch(showFavorites())
  }

  return (
    <S.Aside>
      {showSearchBar ? (
        <>
          <Input
            type="text"
            placeholder="Buscar contato por nome"
            value={input}
            onChange={(e) => dispatch(contactFilter(e.target.value))}
          />
          {isShowingFavorites ? (
            <EditButton onClick={showAllContactsClick}>Mostrar Todos</EditButton>
          ) : (
            <S.FavoriteButton onClick={showFavoritesClick}>Favoritos</S.FavoriteButton>
          )}
        </>
      ) : (
        <>
          <EditButton onClick={handleClick}>Voltar para a lista</EditButton>
        </>
      )}
    </S.Aside>
  )
}

export default Sidebar
