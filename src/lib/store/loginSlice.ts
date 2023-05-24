import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isLogin: boolean;
}

const initialState: InitialState = {
  isLogin: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    userLogin: (state) => {
      return {
        ...state,
        isLogin: true,
      };
    },
    userLogout: (state) =>{
      return {
        ...state,
        isLogin: false,
      };
    },
  },
})

export default loginSlice ;
export const {userLogin,userLogout} = loginSlice.actions