import './App.css'
import AddTaskForm from "./Components/AddTaskForm/AddTaskForm.tsx";
import Filters from "./Components/Filters/Filters.tsx";
import Tasks from "./Components/Tasks/Tasks.tsx";

function App() {

  return (
    <>
      <AddTaskForm />
        <Tasks />
        <Filters />
    </>
  )
}

export default App
