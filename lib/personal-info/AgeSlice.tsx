import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface AgeState {
  age: number;
  gender: string;
  country: string;
}

const initialState: AgeState = {
  age: 0,
  gender: "",
  country: "",
};

export const agePredictAsync = createAsyncThunk(
  "agepredict/agePredictAsync",
  async (name: string) => {
    const res = await fetch(`https://api.agify.io/?name=${name}`);
    const data = await res.json();
    return data.age;
  }
);

export const sexPredictAsync = createAsyncThunk(
  "sexPredict/sexPredictAsync",
  async (name: string) => {
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    const data = await res.json();
    return data.gender;
  }
);

export const countryPredictAsync = createAsyncThunk(
  "countryPredict/countryPredictAsync",
  async (name: string) => {
    const res = await fetch(`https://api.nationalize.io/?name=${name}`);
    const data = await res.json();
    return data.country[0].country_id;
  }
);

const ageSlice = createSlice({
  name: "agepredict",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(agePredictAsync.pending, () => {
        console.log("Prediction is pending");
      })
      .addCase(agePredictAsync.fulfilled, (state, action) => {
        state.age = action.payload;
      })
      .addCase(sexPredictAsync.fulfilled, (state, action) => {
        state.gender = action.payload;
      })
      .addCase(countryPredictAsync.fulfilled, (state, action) => {
        state.country = action.payload || "";
      });
  },
});

export default ageSlice.reducer;
