import { useDispatch } from 'react-redux';
import {
    choosedToShowAllTasks,
    choosedToShowActiveTasks,
    choosedToShowDoneTasks
} from '../../redux/ReducerSlices/FiltersSlice.tsx';

import {deleteDoneTasks} from "../../redux/ReducerSlices/TasksSlice.tsx";

export default function Filter() {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(choosedToShowAllTasks())}>All</button>
            <button onClick={() => dispatch(choosedToShowActiveTasks())}>Active</button>
            <button onClick={() => dispatch(choosedToShowDoneTasks())}>Completed</button>
            <button onClick={() => dispatch(deleteDoneTasks())}>Clear completed</button>

        </div>
    );
}