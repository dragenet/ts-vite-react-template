import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { TimeDTO } from './types';

// Define a service using a base URL and expected endpoints
export const timeApi = createApi({
  reducerPath: 'timeAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://timeapi.io/api/' }),
  endpoints: (builder) => ({
    getTimeByTimeZone: builder.query<string, string>({
      query: (timeZone: string) => `/Time/current/zone?timeZone=${timeZone}`,
      transformResponse: (rawResult: { result: { data: TimeDTO } }) => rawResult.result.data.time,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetTimeByTimeZoneQuery } = timeApi;
