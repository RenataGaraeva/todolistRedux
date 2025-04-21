import {createSlice} from "@reduxjs/toolkit";

import {deleteTask, taskAdded, taskDone} from "./TasksSlice.tsx";

export const countSlice = createSlice({
    name: 'count',
    initialState: 0,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(taskAdded, (state, action) => {
                if (action.payload.task.trim() !== ""  && action.payload.active) return state + 1
                return state
            })
            .addCase(deleteTask, (state, action) => {
                if (action.payload.active) return state - 1;
                return state
            })
            .addCase(taskDone, (state, action) => {
                return action.payload.active ? state + 1 : state - 1;
            });
    }
})

export default countSlice.reducer