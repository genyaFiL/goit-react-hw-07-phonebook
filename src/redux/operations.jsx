import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// https://64da16c7e947d30a260ac135.mockapi.io/contacts/:endpoint
axios.defaults.baseURL =
  'https://64da16c7e947d30a260ac135.mockapi.io/contacts/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (arg, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', arg);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (arg, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${arg}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
