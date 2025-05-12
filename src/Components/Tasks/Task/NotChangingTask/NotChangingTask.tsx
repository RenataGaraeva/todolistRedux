import {
  deleteTask,
  taskDone,
  type Tasks,
} from "../../../../redux/ReducerSlices/TasksSlice.tsx";
import { useAppDispatch } from "../../../../redux/hooks.tsx";

interface TaskProps {
  task: Tasks;
  setText: (text: string) => void;
  setIsEditing: (isEditing: boolean) => void;
}

export default function NotChangingTask({
  task,
  setText,
  setIsEditing,
}: TaskProps) {
  const dispatch = useAppDispatch();
  const deleteTextTask = () => {
    dispatch(deleteTask(task.id));
  };
  const makeIdDoneOrNotDone = () => {
    dispatch(
      taskDone({
        id: task.id,
        active: !task.active,
      }),
    );
  };
  const handleStartEditing = () => {
    setIsEditing(true);
    setText(task.task);
  };

  return (
    <>
      <input
        className="form-check-input me-2"
        type="checkbox"
        onChange={makeIdDoneOrNotDone}
        checked={!task.active}
      />
      <div className="me-2 fs-6 fs-md-5 fs-lg-4">{task.task}</div>
      <input
        className="btn me-2"
        type="button"
        onClick={handleStartEditing}
        value="Change"
      />
      <input
        className="btn"
        type="button"
        onClick={deleteTextTask}
        value="Delete"
      />
    </>
  );
}
