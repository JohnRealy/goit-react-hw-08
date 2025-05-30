//https://67c4be83c4649b9551b46f04.mockapi.io/
//https://connections-api.goit.global/

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../auth/operations";

axios.defaults.baseURL = "https://67c4be83c4649b9551b46f04.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get("/contacts");
      return data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const { data } = await api.delete(`/contacts/${id}`);
      return data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const { data } = await api.post("/contacts", contact);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async (contact, thunkAPI) => {
    try {
      const { data } = await api.patch(`/contacts/${contact.id}`, contact);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
