import { useDispatch, useSelector } from 'react-redux';
import {
    choosedToShowAllTasks,
    choosedToShowActiveTasks,
    choosedToShowDoneTasks
} from '../../redux/ReducerSlices/FiltersSlice.tsx';

import {deleteDoneTasks} from "../../redux/ReducerSlices/TasksSlice.tsx";
import {RootState} from "../../redux/store.tsx";

export default function Filter() {

    const dispatch = useDispatch();
const choosedFilter = useSelector((state: RootState) => state.filters.status);

    const getButtonClass = (filterType: string) => {
        const baseClass = "btn focus-ring";
      if (filterType !== 'completed' && filterType === choosedFilter) {
          return `${baseClass} me-2 btn-primary`
        } else if (filterType === 'completed' && filterType === choosedFilter) {
          return `btn focus-ring btn-outline-primary`
        } else {
return `${baseClass} me-2 btn-outline-primary`
      }
    };


    return (
        <>
<div className="d-flex ">
                <button className={getButtonClass('all')} onClick={() => dispatch(choosedToShowAllTasks())}>All</button>
                <button className={getButtonClass('active')} onClick={() => dispatch(choosedToShowActiveTasks())}>Active</button>
                <button className={getButtonClass('completed')} onClick={() => dispatch(choosedToShowDoneTasks())}>Completed</button>
</div>

                <button className="btn btn-outline-primary align-self-sm-start" onClick={() => dispatch(deleteDoneTasks())}>Clear completed</button>

        </>
    );
}