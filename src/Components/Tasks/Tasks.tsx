import Task from "./Task/Task.tsx";
import {useSelector} from "react-redux";
import {selectFilteredTasks} from "../../redux/selector.tsx";
export default function Tasks () {

    const filteredTasks = useSelector(selectFilteredTasks);
    return (
        <>
            {filteredTasks.map((task) => (
                <div key = {task.id}>
                    <Task task = {task}  />
                </div>
            ))}
        </>
    )
}