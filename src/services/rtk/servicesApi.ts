import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ServiceCategory } from '@/services/types/services';

export const servicesApi = createApi({
  reducerPath: 'servicesApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    getServiceCategories: builder.query<ServiceCategory[], void>({
      query: () => '/celeb-services/categories',
    }),
  }),
});

export const { useGetServiceCategoriesQuery } = servicesApi;
