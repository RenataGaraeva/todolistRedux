import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Tasks {
  task: string;
  id: string;
  active: boolean;
}

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: [] as Tasks[],
  reducers: {
    taskAdded: (state, action) => {
      if (action.payload.task.trim() !== "") {
        state.push(action.payload);
      }
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    changeTask: (
      state,
      action: PayloadAction<{ id: string; task: string }>,
    ) => {
      const taskToUpdate = state.find(
        (element) => element.id === action.payload.id,
      );
      if (taskToUpdate) {
        taskToUpdate.task = action.payload.task;
      }
    },
    taskDone: (
      state,
      action: PayloadAction<{ id: string; active: boolean }>,
    ) => {
      const task = state.find((t) => t.id === action.payload.id);
      if (task) {
        task.active = action.payload.active; // Явно задаём новый статус
      }
    },
    deleteDoneTasks: (state) => {
      return state.filter((task) => task.active);
    },
  },
});

export const { taskAdded, deleteTask, deleteDoneTasks, changeTask, taskDone } =
  tasksSlice.actions;
export default tasksSlice.reducer;
