import AddTaskForm from "../src/Components/AddTaskForm/AddTaskForm.tsx";
import {render, screen} from "@testing-library/react";

test('button is disabled', () => {

    render(<AddTaskForm/>);
    expect(screen.getByPlaceholderText('Enter task')).toBeInTheDocument();
    screen.debug();

})