import Task from "./Task/Task.tsx";
import {useSelector} from "react-redux";
import {selectFilteredTasks} from "../../redux/selector.tsx";
export default function Tasks () {

    const filteredTasks = useSelector(selectFilteredTasks);
    return (
        <>
            {filteredTasks.map((task) => (
                <div className="d-flex align-items-center justify-content-center mb-3 justify-content-lg-start" key = {task.id}>
                    <Task task = {task}  />
                </div>
            ))}
        </>
    )
}