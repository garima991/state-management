// We import two things from Redux Toolkit Query:
// 1. createApi: used to define the API service (endpoints, caching, auto hooks)
// 2. fetchBaseQuery: a small wrapper around fetch that sets up the base URL
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// We define a new API slice using createApi. This API slice will:
// - Handle fetching data
// - Store response in Redux state
// - Automatically cache data
// - Expose React hooks to use each endpoint
export const productsApi = createApi({
    
    // This is the name of the slice in the Redux store.
    // Redux will store API data under state.products because we named it 'products'.
    reducerPath: 'products',

    // This sets the root URL for all API calls.
    // Every endpoint will be relative to this base URL.
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),

    // All endpoints (API operations like GET, POST, etc.) are defined here.
    // builder helps us define queries and mutations in a structured way.
    endpoints: (builder) => ({

        // GET all products (READ operation)
        getAllProduct: builder.query({
            // This function returns the path after baseUrl to hit the endpoint
            // https://dummyjson.com/products
            query: () => '/products',

            // This will automatically generate a React hook:
            // useGetAllProductQuery()
        }),

        // GET one product by ID (READ one item)
        getProductById: builder.query({
            // We pass an ID, and it builds a URL like /products/5
            // https://dummyjson.com/products/5
            query: (id) => `/products/${id}`,

            // This will generate: useGetProductByIdQuery(id)
        }),

        // POST a new product (CREATE operation)
        addNewProduct: builder.mutation({
            // We take a newProduct object and prepare a POST request
            query: (newProduct) => ({
                url: `/products/add`,          // endpoint to create a product
                method: "POST",              
                headers: {
                    "Content-Type": "application/json",
                },
                body: newProduct,              // data to send in the body of request
            }),

            // Generates: useAddNewProductMutation()
        }),

        // PUT or UPDATE an existing product
        updateProduct: builder.mutation({
            // Destructuring: takes id and updated product data
            query: ({ id, updatedProduct }) => ({
                url: `/products/${id}`,        
                method: "PUT",                
                headers: {
                    "Content-Type": "application/json",
                },
                body: updatedProduct,          // updated product data
            }),

            // Generates: useUpdateProductMutation()
        }),

        // DELETE a product by ID
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,        
                method: "DELETE",             
            }),

            // Generates: useDeleteProductMutation()
        }),

    }) // end of endpoints

}); // end of createApi

export const {
  useGetAllProductQuery,
  useGetProductByIdQuery,
  useAddNewProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productsApi;
