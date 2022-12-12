import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  component: <div className="container">default component</div>,
};

export const setModalContent = createAction("SET_MODAL_CONTENT");

const modalSlice = createSlice({
  name: "modalReducer",
  initialState,
  reducers: (builder) => {
    builder.addCase(setModalContent, (state, action) => {
      console.log(action.payload);
      state.component=action.payload
    });
  },
});

export const { setModalComponent } = modalSlice.actions;

export default modalSlice.reducer;
