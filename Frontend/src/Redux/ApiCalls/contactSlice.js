import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactSlice = createApi({
    reducerPath: "contacts",
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_SERVER_URL}/api`}),
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => "contacts?populate=*"
        }),
    })
})

export const { useGetContactsQuery } = contactSlice