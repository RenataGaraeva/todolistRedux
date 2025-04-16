import { RootState } from './store';

export const selectFilteredTasks = (state: RootState) => {
    const allTasks = state.tasks;
    const filter = state.filters.status;

    switch (filter) {
        case 'active':
            return allTasks.filter(task => task.active);
        case 'completed':
            return allTasks.filter(task => !task.active);
        default:
            return allTasks;
    }
};