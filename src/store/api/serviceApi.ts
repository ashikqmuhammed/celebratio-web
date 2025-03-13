import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const serviceApi = createApi({
  reducerPath: 'serviceApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    getServiceCategories: builder.query({
      query: () => '/celeb-services/categories',
    }),
  }),
});

export const { useGetServiceCategoriesQuery } = serviceApi;
