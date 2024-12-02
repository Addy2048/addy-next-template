import { IUser, IUserDefaultState } from "@/types/user";
import { createAppSlice } from "../createAppSlice";
import { loginUser } from "./actions";
import { userApi } from "./api";
import { PayloadAction } from "@reduxjs/toolkit";

const defaultState: IUserDefaultState = {
  users: [],
  user: undefined,
  loading: false,
};

export const userSlice = createAppSlice({
  name: "user",
  initialState: defaultState,
  reducers: {
    setUser: (state, action) => ({
      ...state,
      user: action.payload,
    }),
    logoutUser: (state) => ({ ...state, user: undefined }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload as IUser;
      });

    builder.addMatcher(
      userApi.endpoints.getUsers.matchFulfilled,
      function (state, action: PayloadAction<IUser[]>) {
        return {
          ...state,
          users: action.payload,
        };
      }
    );

    builder.addMatcher(
      userApi.endpoints.createUser.matchFulfilled,
      function (state, action: PayloadAction<IUser>) {
        return {
          ...state,
          users: [state.users, action.payload],
        };
      }
    );
  },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
