import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type FilterState = {
  input: string
  showFavorites: boolean
}

const initialState: FilterState = {
  input: '',
  showFavorites: false,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    contactFilter: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
    },
    showAllContacts: (state) => {
      state.showFavorites = false;
    },
    showFavorites: (state) => {
      state.showFavorites = true;
    },
  }
})

export const { contactFilter, showAllContacts, showFavorites } = filterSlice.actions

export default filterSlice.reducer
