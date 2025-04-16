import './App.css'
import AddTaskForm from "./Components/AddTaskForm/AddTaskForm.tsx";
import Filters from "./Components/Filters/Filters.tsx";
import Tasks from "./Components/Tasks/Tasks.tsx";
import Count from "./Components/Count/Count.tsx";

function App() {

  return (
    <>
      <AddTaskForm />
        <Tasks />
      <Count />
        <Filters />
    </>
  )
}

export default App
