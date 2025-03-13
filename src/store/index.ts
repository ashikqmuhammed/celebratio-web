import { configureStore, Middleware } from "@reduxjs/toolkit";
import { serviceApi } from "./api/serviceApi";
import serviceReducer from "@/store/features/serviceSlice";

export const store = configureStore({
  reducer: {
    [serviceApi.reducerPath]: serviceApi.reducer,
    events: serviceReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serviceApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
