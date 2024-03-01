import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  list: [],
  errors: {}
}

const fetchGreetings = createAsyncThunk(
  'greetings/fetchGreetings',
  async (empty, thunkAPI) => {
    try {
      const req = await axios.get("http://localhost:3000/greetings");
      const res = req.data;
      return res;
    } catch(error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {
    // not needed normal reducers
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchGreetings.fulfilled, (state, { payload }) => {
      state.list = payload
    })
    .addCase(fetchGreetings.rejected, (state, { payload }) => {
      state.errors = payload
    })
  }
})

export default greetingsSlice.reducer

export { fetchGreetings }