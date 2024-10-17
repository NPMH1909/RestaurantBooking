import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = 'http://localhost:3000/restaurants'
export const restaurantApi = createApi({
  reducerPath: 'restaurantApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({
    getAllRestaurant: builder.query({
      query: () => '/', 
    }),
    getRestaurantById: builder.query({
      query: (id) => `/${id}`, 
    }),
  }),
});

export const { useGetAllRestaurantQuery, useGetRestaurantByIdQuery } = restaurantApi;
