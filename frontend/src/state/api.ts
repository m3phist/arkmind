import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface NewItem {
  name: string;
  description: string;
  price: number;
}

export interface UpdateItem {
  name?: string;
  description?: string;
  price?: number;
}

export interface Order {
  itemId: number;
  name: string;
  quantity: number;
}

export interface ordersSummary {
  ordersSummaryId: number;
  totalPrice: number;
  createdAt: string;
}

export interface DashboardMetrics {
  mostExpensiveItems: Item[];
  mostOrderItems: Order[];
  ordersSummary: ordersSummary[];
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: "api",
  tagTypes: ["DashboardMetrics", "Items"],
  endpoints: (build) => ({
    getDashboardMetrics: build.query<DashboardMetrics, void>({
      query: () => "/api/dashboard",
      providesTags: ["DashboardMetrics"],
    }),
    getItems: build.query<Item[], string | void>({
      query: (search) => ({
        url: "/api/items",
        params: search ? { search } : {},
      }),
      providesTags: ["Items"],
    }),
    createItem: build.mutation<Item, NewItem>({
      query: (newItem) => ({
        url: "/api/items",
        method: "POST",
        body: newItem,
      }),
      invalidatesTags: ["Items"],
    }),
    updateItem: build.mutation<Item, { id: number; updatedItem: UpdateItem }>({
      query: ({ id, updatedItem }) => ({
        url: `/api/items/${id}`,
        method: "PUT",
        body: updatedItem,
      }),
      invalidatesTags: ["Items"],
    }),
    deleteItem: build.mutation<{ success: boolean }, number>({
      query: (id) => ({
        url: `/api/items/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Items"],
    }),
  }),
});

export const {
  useGetDashboardMetricsQuery,
  useGetItemsQuery,
  useCreateItemMutation,
  useUpdateItemMutation,
  useDeleteItemMutation,
} = api;