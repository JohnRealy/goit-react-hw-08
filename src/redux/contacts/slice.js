import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  deleteContact,
  addContact,
  updateContact,
} from "./operations";
import { logoutThunk } from "../auth/operations";
import toast from "react-hot-toast";

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
        state.isError = null;
      })
      .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(logoutThunk.fulfilled, () => initialState)
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
        toast.error("Contact has been deleted!");
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        toast.success("Contact has been added!");
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const itemIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (itemIndex !== -1) {
          state.items[itemIndex] = action.payload;
        }
      });
  },
});

export const contactsReducer = slice.reducer;
