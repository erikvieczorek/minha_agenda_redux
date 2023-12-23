import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

type ContactsState = {
  item: Contact[]
}

const initialState: ContactsState = {
  item: [
    {
      id: 1,
      name: 'Erik Vieczorek',
      phone: 54999999999,
      email: 'erikvieczorek@gmail.com',
      isfavorite: false,
    },
    {
      id: 2,
      name: 'Ana Clara',
      phone: 54999999998,
      email: 'anaclara@gmail.com',
      isfavorite: false,
    },
    {
      id: 3,
      name: 'José Antônio',
      phone: 54999999997,
      email: 'joseantonio@gmail.com',
      isfavorite: false,
    },
  ],
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.item = state.item.filter((contact) => contact.id !== action.payload)
    },

    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.item.findIndex(
        (t) => t.id === action.payload.id
      )
      if (contactIndex >= 0) {
        state.item[contactIndex] = action.payload
      }
    },

    createNewContact: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const contactAlreadyExist = state.item.find(
        (contact) =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      )
      if (contactAlreadyExist) {
        alert('Já existe um contato com esse nome')
      } else {
        const lastContact = state.item[state.item.length - 1]

        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1,
          isfavorite: false,
        }
        state.item.push(newContact)
      }
    },

    toggleFavorite: (state, action: PayloadAction<{ id: number }>) => {
      const contactIndex = state.item.findIndex(
        (t) => t.id === action.payload.id
      )
      if (contactIndex >= 0) {
        state.item[contactIndex].isfavorite =
          !state.item[contactIndex].isfavorite
      }
    },
  },
})

export const { remove, edit, createNewContact, toggleFavorite } =
  contactSlice.actions

export default contactSlice.reducer
