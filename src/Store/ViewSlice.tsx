import { createSlice } from "@reduxjs/toolkit";

const ViewState = {
  isGridView: true,
};

const ViewReducer = createSlice({
  name: "viewReducer",
  initialState: ViewState,
  reducers: {
    toggleView: (state) => {
      state.isGridView = !state.isGridView;
    },
  },
});

export const { toggleView } = ViewReducer.actions;
export default ViewReducer.reducer;
