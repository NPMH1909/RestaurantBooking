import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: 'user',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3000/'}),
    endpoints: (builder) =>({
        register: builder.mutation({
            query: (newUser)=>({
                url:'register',
                method:'POST',
                body:newUser
            })
        }),
        login: builder.mutation({
            query: (credentials) => ({
              url: 'login', // Đường dẫn API cho đăng nhập
              method: 'POST',
              body: credentials, // Dữ liệu gửi lên server (email, password)
            }),
          }),
    })
    
})

export const { useRegisterMutation, useLoginMutation } = userApi;