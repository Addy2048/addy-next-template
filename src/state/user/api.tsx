import { appApi } from "../api";

export const userApi = appApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getUsers: builder.query<any, any>({
        query: (params: any) => {
          return {
            url: "https://jsonplaceholder.typicode.com/users",
            params,
            method: "GET",
          };
        },
      }),
      createUser: builder.mutation<any, any>({
        query: (params: any) => {
          return {
            url: "",
            method: "POST",
            params,
          };
        },
      }),
    };
  },
});

export const { useGetUsersQuery, useCreateUserMutation } = userApi;
