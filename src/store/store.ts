import { configureStore } from "@reduxjs/toolkit";
import themeModeSlice from "./themeModeSlice";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const store = configureStore({
  reducer:{
    themeMode : themeModeSlice.reducer
  } 
})

export default store ;  
export type AppDispatch = typeof store.dispatch ;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch ;
export const useAppSelector: TypedUseSelectorHook <RootState> = useSelector;