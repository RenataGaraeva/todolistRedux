import {taskAdded, type Tasks} from "../../redux/ReducerSlices/TasksSlice.tsx"
import {nanoid} from "@reduxjs/toolkit";
import {useAppDispatch} from "../../redux/hooks.tsx";

interface AddTaskFormFields extends HTMLFormControlsCollection {
    taskTitle: HTMLInputElement
}
interface AddTaskFormElements extends HTMLFormElement {
    readonly elements: AddTaskFormFields
}
export default function AddTaskForm () {

    const dispatch = useAppDispatch()

    const handleSubmit = (e: React.FormEvent<AddTaskFormElements>) => {
        e.preventDefault()

        const {elements} = e.currentTarget
        const task = elements.taskTitle.value
        const Task: Tasks = {
            task,
            id: nanoid(),
            active: true
        }

        dispatch(taskAdded(Task))

        e.currentTarget.reset()

    }

    return (
        <>
            <form onSubmit = {handleSubmit}>
                <label htmlFor="taskTitle"></label>
                <input type = "text" id = "taskTitle"/>
                <input type="submit" value="Add"  />
                <div></div>
            </form>
        </>
    )
}