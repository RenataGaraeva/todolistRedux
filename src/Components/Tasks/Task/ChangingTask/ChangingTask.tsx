import {deleteTask, changeTask, taskDone, type Tasks} from '../../../../redux/ReducerSlices/TasksSlice.tsx'
import {useAppDispatch} from "../../../../redux/hooks.tsx";

interface TaskProps {
    task: Tasks;
    setText: (text: string) => void;
    setIsEditing: (isEditing: boolean) => void;
    text: string;
}

export default function ChangingTask ({task, setText, setIsEditing, text}: TaskProps) {
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

    const handleSaveChanges = () => {
        dispatch(changeTask({
            id: task.id,
            task: text
        }))
        setIsEditing(false)
    }

    return (
    <>
        <input type="checkbox" onChange={makeIdDoneOrNotDone} checked={!task.active} />
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <input type="button" onClick={handleSaveChanges}/>
        <input type="button" onClick={deleteTextTask}/>
    </>
)
}