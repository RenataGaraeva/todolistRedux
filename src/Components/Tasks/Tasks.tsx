import Task from "./Task/Task.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store.tsx";


export default function Tasks () {

    const tasks = useSelector((state: RootState) => state.tasks)

    return (
        <>
            {tasks.map((task) => (
                <div key = {task.id}>
                    <Task task = {task}  />
                </div>
            ))}
        </>
    )
}