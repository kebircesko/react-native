import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
// Ruan gjendjen e përbashkët.
export const store = configureStore({ reducer: { counter: counterReducer } });
