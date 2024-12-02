import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "user/logon",
  async ({ email, password }: any) => {
    try {
      const body = { email, password };
      const response = await axios.post("", { body });

      console.log(response);

      return response;
    } catch (error) {
      console.error({ error });
      return error;
    }
  }
);
