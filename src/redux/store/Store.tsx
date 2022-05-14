import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "../slices/AuthSlice";

const Store = configureStore({
  reducer: { auth: AuthSlice.reducer },
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export const AuthAction = AuthSlice.actions;
export type SelectorState = ReturnType<typeof Store.getState>;
export type ActionDispatch = typeof Store.dispatch;

export default Store;
