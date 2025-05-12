import {
  taskAdded,
  type Tasks,
} from "../../redux/ReducerSlices/TasksSlice.tsx";
import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../redux/hooks.tsx";

interface AddTaskFormFields extends HTMLFormControlsCollection {
  taskTitle: HTMLInputElement;
}
interface AddTaskFormElements extends HTMLFormElement {
  readonly elements: AddTaskFormFields;
}
export default function AddTaskForm() {
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<AddTaskFormElements>) => {
    e.preventDefault();

    const { elements } = e.currentTarget;
    const task = elements.taskTitle.value;
    const Task: Tasks = {
      task,
      id: nanoid(),
      active: true,
    };

    dispatch(taskAdded(Task));

    e.currentTarget.reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mb-3 mt-3 d-flex justify-content-center"
      >
        <input
          type="text"
          id="taskTitle"
          className="form-control me-2 w-50"
          placeholder="Enter task"
        />
        <input className="btn btn-outline-primary" type="submit" value="Add" />
      </form>
    </>
  );
}
