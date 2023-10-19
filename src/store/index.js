import {createSlice, configureStore} from '@reduxjs/toolkit';

const contactSlice = createSlice({
    name: 'contacts',
    initialState: {contacts: []},
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload);
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        },
        updateContacts: (state, action) => {
            state.contacts = action.payload;
        },
        editContact: (state, action) => {
            const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
            if (index !== -1) {
                state.contacts[index] = action.payload;
            }
        },
    },
});

export const {
    addContact,
    deleteContact,
    updateContacts,
    editContact,
} = contactSlice.actions;

const store = configureStore({
    reducer: contactSlice.reducer,
});

export default store;


