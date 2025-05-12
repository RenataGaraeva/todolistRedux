import "./App.css";
import AddTaskForm from "./Components/AddTaskForm/AddTaskForm.tsx";
import Filters from "./Components/Filters/Filters.tsx";
import Tasks from "./Components/Tasks/Tasks.tsx";
import Count from "./Components/Count/Count.tsx";

function App() {
  return (
    <div className="container-fluid min-vh-100 d-flex">
      <div className="row justify-content-center align-items-center w-100 mx-2">
        <div className="col-12 col-md-10 col-lg-6 border shadow ">
          <AddTaskForm />
          <Tasks />
          <div className="d-flex row-gap-2 align-items-center mt-4 mb-3 flex-column flex-sm-row justify-content-sm-between">
            <Count />
            <Filters />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
