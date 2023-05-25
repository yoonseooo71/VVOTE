import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isLogin: boolean;
  name: string | undefined;
  email: string | undefined;
  photo: string | undefined;
}

const initialState: InitialState = {
  isLogin: false,
  name: undefined,
  email:undefined,
  photo:undefined,
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
    setUserInfo: (state,action) =>{
      return {
        ...state,
        name: action.payload.name ,
        email: action.payload.email ,
        photo: action.payload.photo ,
      }
    },
    /** store 유저데이터 초기화 */
    resetUserInfo: (state) => {
      return {
        ...state,
        name: undefined,
        email: undefined ,
        photo: undefined ,
      }
    }
  },
})

export default loginSlice ;
export const {userLogin,userLogout,setUserInfo,resetUserInfo} = loginSlice.actions