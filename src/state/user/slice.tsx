import { IUserDefaultState } from "@/types/user";
import { createAppSlice } from "../createAppSlice";

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
  extraReducers: (builder) => {},
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
