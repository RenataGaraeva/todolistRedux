import { configureStore } from '@reduxjs/toolkit'

import tasksReducer from "./ReducerSlices/TasksSlice.tsx";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>