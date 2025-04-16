import ChangingTask from "./ChangingTask/ChangingTask.tsx";
import NotChangingTask from "./NotChangingTask/NotChangingTask.tsx";
import {useState} from "react";
import {type Tasks} from '../../../redux/ReducerSlices/TasksSlice.tsx'

interface TaskProps {
    task: Tasks;

}

export default function Task ({task}: TaskProps) {

    const [text, setText] = useState(task.task)
    const [isEditing, setIsEditing] = useState(false)

    return (
        <>
            {isEditing ? (<ChangingTask task={task} setIsEditing={setIsEditing} text = {text} setText = {setText} />) : (<NotChangingTask task={task} setIsEditing = {setIsEditing}
                                                                                                                          setText = {setText}/>)}
        </>
    )
}