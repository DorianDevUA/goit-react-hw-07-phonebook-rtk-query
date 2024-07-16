import { createSelector } from '@reduxjs/toolkit';

export const selectContactFilter = state => state.filter;
export const selectPhonebook = state => state.contacts;
export const selectContacts = state => state.contacts.items;
export const selectContactsStatus = state => state.contacts.status;
export const selectContactsError = state => state.contacts.error;

// export const selectFilteredContacts = state => {
//   const contacts = selectContacts(state);
//   const contactFilter = selectContactFilter(state);
//   const normalizedFilter = contactFilter.toLowerCase();

//   return contacts.filter(({ name }) => {
//     return name.toLowerCase().includes(normalizedFilter);
//   });
// };

//Мемоізація селектора selectFilteredContacts
export const selectFilteredContacts = createSelector(
  [selectContacts, selectContactFilter],
  (contacts, contactFilter) => {
    const normalizedFilter = contactFilter.toLowerCase();

    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
  },
);
