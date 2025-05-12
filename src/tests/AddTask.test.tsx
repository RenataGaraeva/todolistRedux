import AddTaskForm from "../Components/AddTaskForm/AddTaskForm.tsx";
import { render, screen } from "@testing-library/react";
import { test, expect, vi, describe } from "vitest";
import "@testing-library/jest-dom/vitest";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reducer, {
  taskAdded,
  Tasks,
} from "../redux/ReducerSlices/TasksSlice.tsx";
import userEvent from "@testing-library/user-event";

const mockStore = configureStore({
  reducer: {
    tasks: () => ({ tasks: [] }),
  },
});

vi.mock("@reduxjs/toolkit", async () => {
  const actual = await vi.importActual("@reduxjs/toolkit");
  return {
    ...actual,
    nanoid: () => "test-id-123",
  };
});

describe("form works", () => {

  test("user adds task to store", async () => {
    const user = userEvent.setup();
    render(
      <Provider store={mockStore}>
        <AddTaskForm />
      </Provider>,
    );

    const buttonToEnterTask = screen.getByPlaceholderText("Enter task");
    const buttonToSubmit = screen.getByDisplayValue("Add");

    await user.type(buttonToEnterTask, "new task");
    await user.click(buttonToSubmit);

    const previousState: Tasks[] = [];
    expect(
      reducer(
        previousState,
        taskAdded({ task: "new task", id: "test-id-123", active: true }),
      ),
    ).toEqual([{ task: "new task", id: "test-id-123", active: true }]);
  });

  test("after submit form it must be clear", async () => {
    const user = userEvent.setup();
    render(
      <Provider store={mockStore}>
        <AddTaskForm />
      </Provider>,
    );

    const buttonToEnterTask = screen.getByPlaceholderText("Enter task");
    const buttonToSubmit = screen.getByDisplayValue("Add");

    await user.type(buttonToEnterTask, "new task");
    await user.click(buttonToSubmit);

    expect(buttonToEnterTask).toHaveValue("");
  });
});
