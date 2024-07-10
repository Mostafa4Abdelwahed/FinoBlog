import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pageSlice = createApi({
    reducerPath: "pages",
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_SERVER_URL}/api`}),
    endpoints: (builder) => ({
        getPages: builder.query({
            query: () => "pages?populate=*"
        }),
        getSinglePage: builder.query({
            query: (id) => `pages/${id}?populate=*`
        })
    })
})

export const { useGetPagesQuery, useGetSinglePageQuery } = pageSlice