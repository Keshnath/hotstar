
import { createSlice} from "@reduxjs/toolkit";
const initialState = {
  cardToggle: false,
};

const cardSlice = createSlice({
  name: 'cardToggle',
  initialState,
  reducers: {
    cardShow: (state) => {
      state.cardToggle = !state.cardToggle;
    },
  },
});

export default cardSlice.reducer;

export const cardSliceAction = cardSlice.actions;
