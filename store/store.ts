import { configureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "./counterSlice";

export const store = configureStore({
    reducer: CounterSlice.reducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch