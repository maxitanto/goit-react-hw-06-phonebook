import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { contactsInitialState } from './initialState';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const contactsReducer = contactsSlice.reducer;

export const persistContactsReducer = persistReducer(
  persistConfig,
  contactsReducer
);

export const { addContact, removeContact } = contactsSlice.actions;

//Selectors
export const getContacts = state => state.contacts.contacts;
