import { createApi } from "@reduxjs/toolkit/query/react";
import { staggeredAppBaseQuery } from "./base-query";

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: staggeredAppBaseQuery,
  endpoints: () => ({}),
  // Disables caching for this endpoint
  keepUnusedDataFor: 0,
  refetchOnMountOrArgChange: true,
  // refetchOnReconnect: true,
});
