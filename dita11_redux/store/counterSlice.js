import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  // Numri fillestar.
  initialState: { value: 0 },
  reducers: {
    // Rrit numrin.
    increment: (state) => {
      state.value += 1;
    },
    // Zvogëlon numrin.
    decrement: (state) => {
      state.value -= 1;
    },
    // Kthen numrin në zero.
    reset: (state) => {
      state.value = 0;
    },
  },
});
// Eksporton veprimet.
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
