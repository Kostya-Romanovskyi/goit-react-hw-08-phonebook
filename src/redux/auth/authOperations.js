import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// export const register = createAsyncThunk('auth/signup', async userData => {
//   try {
//     const response = await axios.post('/users/signup', userData);
//     token.set(response.data.token);
//     return response.data;
//   } catch (e) {
//     //   return thunkAPI.rejectWithValue(e.message);
//   }
// });
export const register = createAsyncThunk(
  'auth/signup',
  (userData, thunkAPI) => {
    try {
      const response = axios.post('/users/signup', userData);
      token.set(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async userData => {
  try {
    const response = await axios.post('/users/login', userData);
    token.set(response.data.token);
    return response.data;
  } catch (e) {
    //   return thunkAPI.rejectWithValue(e.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (e) {
    //   return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    thunkAPI.getState();
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get(`/users/current`);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);
