// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const mockApi = createApi({
  reducerPath: 'mockApiContacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://669013f3c0a7969efd9ae577.mockapi.io/api/v1',
  }),
  endpoints: builder => ({
    getAllContacts: builder.query({
      query: () => `/contacts`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllContactsQuery } = mockApi;
