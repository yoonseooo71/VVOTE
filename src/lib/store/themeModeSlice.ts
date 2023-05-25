import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isDarkMode: boolean;
}

const initialState: InitialState = {
  isDarkMode: false,
};

const themeModeSlice = createSlice({
  name: "themeMode",
  initialState,
  reducers: {
    themeWhite: (state) => {
      return {
        ...state,
        isDarkMode: false
      }
    },
    themeDark: (state) => {
      return {
        ...state,
        isDarkMode: true
      }
    }
  },
});

export default themeModeSlice;
export const {themeWhite,themeDark } = themeModeSlice.actions;