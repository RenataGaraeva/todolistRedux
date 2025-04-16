import { configureStore } from '@reduxjs/toolkit'

import tasksReducer from "./ReducerSlices/TasksSlice.tsx";
import filtersReducer from "./ReducerSlices/FiltersSlice.tsx";
import countReducer from "./ReducerSlices/CountSlice.tsx";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        filters: filtersReducer,
        count: countReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>