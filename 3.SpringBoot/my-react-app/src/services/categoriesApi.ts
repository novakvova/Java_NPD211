import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {Category, ICategoryCreate} from "../types/Category.ts";
import {APP_ENV} from "../env";
import {serialize} from 'object-to-formdata';

export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${APP_ENV.REMOTE_BASE_URL}/api/` }),
    tagTypes: ["Category"], // Додаємо tag для категорій
    endpoints: (builder) => ({
        getAllCategories: builder.query<Category[], void>({
            query: () => 'categories',
            providesTags: ["Category"], // Позначаємо, що цей запит пов'язаний з "Category"
        }),

        createCategory: builder.mutation<Category, ICategoryCreate>({
            query: (model) => {
                try {
                    const formData = serialize(model);
                    return {
                        url: 'categories',
                        method: 'POST',
                        body: formData,
                    };
                } catch {
                    throw new Error("Error serializing the form data.");
                }
            },
            invalidatesTags: ["Category"], // Інвалідовуємо "Category" після створення
        }),
    }),
});

export const { useGetAllCategoriesQuery, useCreateCategoryMutation } = categoriesApi;