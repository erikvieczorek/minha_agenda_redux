import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { toggleFavorite } from '../../store/reducers/contact'
import Contact from '../../components/Contact'
import * as S from '../../styles'
import AddButton from '../../components/AddButton'

const ContactList = () => {
  const dispatch = useDispatch();
  const { item } = useSelector((state: RootReducer) => state.contacts)
  const { input, showFavorites } = useSelector((state: RootReducer) => state.filter)

  const filterAndSortContacts = () => {
    let filteredContacts = item

    // Aplica filtro de busca
    filteredContacts = filteredContacts.filter(
      (i) => i.name.toLowerCase().search(input.toLowerCase()) >= 0
    );

    // Se showFavorites for verdadeiro, filtra apenas os favoritos
    if (showFavorites) {
      filteredContacts = filteredContacts.filter((i) => i.isfavorite)
    }

    // Ordena os contatos pelo nome em ordem alfabética
    const sortedContacts = filteredContacts.sort((a, b) => a.name.localeCompare(b.name))

    return sortedContacts
  }

  return (
    <S.MainContainer>
      <S.Header>
        <li>
          <S.Title>Meus Contatos</S.Title>
          <AddButton />
        </li>
      </S.Header>
      <S.ContactsContainer>
        {filterAndSortContacts().map((c) => (
          <li key={c.name}>
            <Contact
              name={c.name}
              phone={c.phone}
              email={c.email}
              id={c.id}
              isfavorite={c.isfavorite}
              onToggleFavorite={() => dispatch(toggleFavorite({ id: c.id }))}
            />
          </li>
        ))}
      </S.ContactsContainer>
    </S.MainContainer>
  )
}

export default ContactList
