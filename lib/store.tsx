import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../lib/counter/counterSlice";
import ageReducer from "../lib/personal-info/AgeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    agepredict: ageReducer,

    // the reducers goes here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
