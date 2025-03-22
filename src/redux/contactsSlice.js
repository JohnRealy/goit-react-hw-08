import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./contactsOps";
import { useSelector } from "react-redux";
import { selectNameFilter } from "./filtersSlice";

const initialState = {
  items: {},
  isLoading: false,
  isError: null,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

// contacts
export const selectContacts = (state) => state.contacts.items;

// loading
export const selectLoading = (state) => state.contacts.isLoading;

// error
export const selectError = (state) => state.contacts.isError;

export const contactsReducer = slice.reducer;

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
