import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // [eventsApi.reducerPath]: eventsApi.reducer, // RTK Query Reducer
    // events: eventsReducer, // Async thunk reducer
    //   middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(eventsApi.middleware),
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
