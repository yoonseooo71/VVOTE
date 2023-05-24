import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  currentMode: boolean;
}

const initialState: InitialState = {
  currentMode: false,
};

const themeModeSlice = createSlice({
  name: "themeMode",
  initialState,
  reducers: {
    changeThemeMode: (state) => {
      return {
        ...state,
        currentMode: !state.currentMode,
      };
    },
  },
});

export default themeModeSlice;
export const { changeThemeMode } = themeModeSlice.actions;