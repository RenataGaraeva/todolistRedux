import { configureStore } from '@reduxjs/toolkit'

import tasksReducer from "./ReducerSlices/TasksSlice.tsx";
import filtersReducer from "./ReducerSlices/FiltersSlice.tsx";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        filters: filtersReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>