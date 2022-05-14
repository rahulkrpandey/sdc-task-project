import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: sessionStorage.getItem("user") ? sessionStorage.getItem("user") : null,
  accessToken: sessionStorage.getItem("token")
    ? sessionStorage.getItem("token")
    : null,
  loading: false,
  error: null,
};

export const AuthSlice = createSlice({
  name: "auth-slice",
  initialState,
  reducers: {
    authRequest(state) {
      state.loading = true;
    },
    authFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.user = null;
    },
    authSuccess(state, action) {
      state.loading = false;
      state.accessToken = action.payload;
      state.error = null;
    },
    loadProfile(state, action) {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    logOut(state) {
      state.user = null;
      state.accessToken = null;
    },
  },
});
