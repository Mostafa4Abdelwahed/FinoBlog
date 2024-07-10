import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categorySlice = createApi({
    reducerPath: "categories",
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_SERVER_URL}/api`}),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => "categories?populate=*"
        }),
        getSingleCategory: builder.query({
            query: (id) => `categories/${id}?populate=*`
        })
    })
})

export const { useGetCategoriesQuery, useGetSingleCategoryQuery } = categorySlice