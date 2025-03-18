import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./feactures/cartSlice";
import loadingReducer from "./feactures/loadingSlice";
import productReducer from "./feactures/productSlice";

 export const store = configureStore({
    reducer: {
        cardReducer,
        loadingReducer,
        productReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
 });

 export type RootState = ReturnType<typeof store.getState>;
 export type AppDispatch = typeof store.dispatch;