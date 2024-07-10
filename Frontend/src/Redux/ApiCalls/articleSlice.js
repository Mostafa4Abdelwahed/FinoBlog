import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const articleSlice = createApi({
    reducerPath: "articles",
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_SERVER_URL}/api`}),
    endpoints: (builder) => ({
        getArticles: builder.query({
            query: (page) => `articles?sort=createdAt:DESC&pagination[pageSize]=10&pagination[page]=${page}&populate=*`
        }),
        getSingleArticle: builder.query({
            query: (id) => `articles/${id}?populate=*`
        })
    })
})

export const { useGetArticlesQuery, useGetSingleArticleQuery } = articleSlice