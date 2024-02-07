import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuid } from 'uuid';


const initialState = {
  employees: [],
  status: "idle",
  error: null,
  test: 0,
};

export const fetchEmployees = createAsyncThunk(
  "employees/fetchEmployees",
  async () => {
    const res = await axios.get(
      "https://dummy.restapiexample.com/api/v1/employees"
    );
    return res.data.data;
  }
);

export const dashboardSlice = createSlice({
  name: `dashboard`,
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push({...action.payload, id: uuid()})
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = "success";
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export const { addEmployee } = dashboardSlice.actions;
export default dashboardSlice.reducer;
