// src/services/api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://customeracoountapis.onrender.com/api' }),
  endpoints: (builder) => ({
    getCustomers: builder.query({
      query: (page = 1, size = 10) => `getcustomers?page=${page}&size=${size}`,
    }),
  }),
});

export const { useGetCustomersQuery } = api;
export default api;
