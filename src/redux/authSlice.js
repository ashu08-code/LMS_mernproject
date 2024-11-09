import { createSlice } from "@reduxjs/toolkit";
import { userLogin , getUserDetail  } from "../actions/authActions";
import { useNavigate } from "react-router-dom";

// initialize userToken from local storage
// const userToken = localStorage.getItem('userToken')
//   ? localStorage.getItem('userToken')
//   : null

const initialState = {
  loading: false,
  userInfo: null,
  isUserLogin: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIslogin: (state) => {
      if (localStorage.getItem("lmsweb_uId") != null) {
        state.loading = false;
        state.isUserLogin = true;
        state.userToken = null;
        state.error = null;
      }
    },
  },
  extraReducers: (builder) => {
    // login user
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isUserLogin = true;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
    
      builder
      .addCase(getUserDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        console.log("userInfo updated in state:", state.userInfo);
      })
      .addCase(getUserDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
 
    
  },
});

export const { setIslogin } = authSlice.actions;
export default authSlice.reducer;
