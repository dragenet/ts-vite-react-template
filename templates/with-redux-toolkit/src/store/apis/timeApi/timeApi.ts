import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { TimeDTO } from './types';

// Define a service using a base URL and expected endpoints
export const timeApi = createApi({
  reducerPath: 'timeAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://worldtimeapi.org/api' }),
  endpoints: (builder) => ({
    getTime: builder.query<TimeDTO, null>({
      query: () => ({ url: `/ip` }),
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetTimeQuery } = timeApi;
