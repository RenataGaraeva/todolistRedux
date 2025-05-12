import { describe, expect, test } from "vitest";
import reducer, {
  deleteTask,
  taskAdded,
  taskDone,
  Tasks,
} from "../redux/ReducerSlices/TasksSlice.tsx";

describe("dispatch works", () => {

  test("removes task from store", () => {

    const previousState: Tasks[] = [
      {
        task: "new task",
        id: "test-id-123",
        active: true,
      },
    ];

    expect(reducer(previousState, deleteTask("test-id-123"))).toEqual([]);
  });

  test("changes active tag of task", () => {

    const previousState: Tasks[] = [
      {
        task: "new task",
        id: "test-id-123",
        active: true,
      },
      {
        task: "new task",
        id: "test-id-125",
        active: true,
      },
    ];

    expect(
      reducer(previousState, taskDone({ id: "test-id-123", active: false })),
    ).toEqual([
      {
        task: "new task",
        id: "test-id-123",
        active: false,
      },
      {
        task: "new task",
        id: "test-id-125",
        active: true,
      },
    ]);
  });

  test("adds task to store", () => {

    const previousState: Tasks[] = [];

    expect(
      reducer(
        previousState,
        taskAdded({ task: "new task", id: "test-id-123", active: true }),
      ),
    ).toEqual([
      {
        task: "new task",
        id: "test-id-123",
        active: true,
      },
    ]);
  });
});