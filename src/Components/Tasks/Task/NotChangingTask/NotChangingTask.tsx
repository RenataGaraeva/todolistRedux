import {deleteTask, taskDone, type Tasks} from '../../../../redux/ReducerSlices/TasksSlice.tsx'
import {useAppDispatch} from "../../../../redux/hooks.tsx";


interface TaskProps {
    task: Tasks;
    setText: (text: string) => void;
    setIsEditing: (isEditing: boolean) => void;
}

export default function NotChangingTask ({task, setText, setIsEditing}: TaskProps) {
    const dispatch = useAppDispatch()
    const deleteTextTask = () => {
        dispatch(deleteTask(task.id))

    }
    const makeIdDoneOrNotDone = () => {
        dispatch(taskDone({
            id: task.id,
            active: !task.active,
        }));
    }
    const handleStartEditing = () => {
        setIsEditing(true)
        setText(task.task)
    }

    return (
        <>
            <input type="checkbox" onChange={makeIdDoneOrNotDone} checked={!task.active} />
            <div>{task.task}</div>
            <input type="button" onClick={handleStartEditing} value="Change"/>
            <input type="button" onClick={deleteTextTask} value ="Delete"/>
        </>
    )
}