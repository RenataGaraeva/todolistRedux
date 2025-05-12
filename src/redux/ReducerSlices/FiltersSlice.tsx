import { createSlice } from "@reduxjs/toolkit";

type FilterType = "all" | "active" | "completed" | "deleteDoneTasks";

interface FiltersState {
  status: FilterType;
}

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    status: "all",
  } as FiltersState,
  reducers: {
    choosedToShowAllTasks: (state) => {
      state.status = "all";
    },
    choosedToShowActiveTasks: (state) => {
      state.status = "active";
    },
    choosedToShowDoneTasks: (state) => {
      state.status = "completed";
    },
  },
});

export const {
  choosedToShowAllTasks,
  choosedToShowActiveTasks,
  choosedToShowDoneTasks,
} = filtersSlice.actions;

export default filtersSlice.reducer;
