import { fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

import { AppState } from "./store";

export const staggeredAppBaseQuery = retry(
  fetchBaseQuery({
    baseUrl: "",
    prepareHeaders: async (headers, { getState }) => {
      const state = getState() as AppState;

      headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");
      headers.set("x-authentication-context", "mobile-app");

      return headers;
    },
  }),
  {
    retryCondition,
  }
);

function retryCondition(error: any, _result: any) {
  const status = error?.status;

  // Retry only on network-related errors
  if (
    status === "FETCH_ERROR" ||
    status === "TIMEOUT_ERROR" ||
    status === "PARSING_ERROR" ||
    typeof status === "undefined" // This could indicate a network error as well
  )
    return true;

  // don't retry on 4xx and 5xx errors
  if (status >= 400 && status < 500) return false;

  return false;
}
