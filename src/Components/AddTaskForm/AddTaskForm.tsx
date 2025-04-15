export default function AddTaskForm () {

    return (
        <>
            <form>
                <label htmlFor="taskTitle"></label>
                <input type = "text" id = "taskTitle"/>
                <input type="submit" value="Add" />
                <div></div>
            </form>
        </>
    )
}