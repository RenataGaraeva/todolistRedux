import AddTaskForm from "../Components/AddTaskForm/AddTaskForm.tsx";
import {render, screen} from "@testing-library/react";
import { test, expect, vi  } from 'vitest';
import '@testing-library/jest-dom/vitest';
import {configureStore, nanoid} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import reducer, {taskAdded, deleteTask, Tasks, taskDone} from '../redux/ReducerSlices/TasksSlice.tsx'
import userEvent from '@testing-library/user-event'


const mockStore = configureStore({
    reducer: {
        tasks: () => ({tasks: []})

    }
})

vi.mock('@reduxjs/toolkit', async (importOriginal) => {
    const mod = await importOriginal();
    return {
        ...mod,
        nanoid: () => 'test-id-123',
    };
});

test('we have input to enter task', () => {

    render(
        <Provider store={mockStore}>
        <AddTaskForm/>
        </Provider>
    );
    expect(screen.getByPlaceholderText('Enter task')).toBeInTheDocument();
    screen.debug();

})

test('adds task to store', () => {

    render(
        <Provider store={mockStore}>
        <AddTaskForm/>
    </Provider>
    )

const previousState: Tasks[] = []
    expect(reducer(previousState, taskAdded({task: 'new task', id: 'test-id-123', active: true}))).toEqual([
        {  task: 'new task',
            id: 'test-id-123',
            active: true
        }
        ]
    )
})

test('user adds task to store', async () => {
 const user = userEvent.setup()
    render(
        <Provider store={mockStore}>
            <AddTaskForm/>
        </Provider>
    )

const buttonToEnterTask = screen.getByPlaceholderText('Enter task')
const buttonToSubmit = screen.getByDisplayValue('Add')

await user.type(buttonToEnterTask, 'new task')
await user.click(buttonToSubmit)

    const previousState: Tasks[] = []
    expect(reducer(previousState, taskAdded({task: 'new task', id: 'test-id-123', active: true}))).toEqual([
            {  task: 'new task',
                id: 'test-id-123',
                active: true
            },
        {  task: 'new task',
            id: 'test-id-123',
            active: true
        }
        ]
    )
})

test('user adds task to store', async () => {
    const user = userEvent.setup()
    render(
        <Provider store={mockStore}>
            <AddTaskForm/>
        </Provider>
    )

    const buttonToEnterTask = screen.getByPlaceholderText('Enter task')
    const buttonToSubmit = screen.getByDisplayValue('Add')

    await user.type(buttonToEnterTask, 'new task')
    await user.click(buttonToSubmit)

    expect(buttonToEnterTask).toHaveValue('')
})

test('removes task from store', () => {

    const previousState: Tasks[] = [{  task: 'new task',
        id: 'test-id-123',
        active: true
    },
        {  task: 'new task',
            id: 'test-id-125',
            active: true
        }]
    expect(reducer(previousState, deleteTask('test-id-123'))).toEqual([]) //здесь когда массив исходной пустой и я ищу по id, то все равно тест успешный почему-то,
    // хотя должны быть ошибка же
})

test('change active tag of task', () => {
    const previousState: Tasks[] = [
        {  task: 'new task',
            id: 'test-id-123',
            active: true
        },
        {  task: 'new task',
            id: 'test-id-125',
            active: true
        }
    ]
    expect(reducer(previousState, taskDone({id: 'test-id-123', active: false}))).toEqual([
        {  task: 'new task',
            id: 'test-id-123',
            active: false
        },
        {  task: 'new task',
            id: 'test-id-125',
            active: true
        }
    ])
})