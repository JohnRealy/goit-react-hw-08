import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

// contacts
export const selectContacts = (state) => state.contacts.items;

// loading
export const selectLoading = (state) => state.contacts.isLoading;

// error
export const selectError = (state) => state.contacts.isError;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filters) => {
    const filteredData =
      contacts.length > 0
        ? contacts.filter((item) =>
            item.name.toLowerCase().includes(filters.toLowerCase())
          )
        : [];
    return filteredData;
  }
);
