import { createSlice, nanoid } from '@reduxjs/toolkit';
import initialStateContacts from '../data/initialStateContacts';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactsList: initialStateContacts,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contactsList.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contactsList.findIndex(
        contact => contact.id === action.payload
      );
      state.contactsList.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
