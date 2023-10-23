import TaskForm from './TaskForm'
import TaskList from './TaskList'
import { useSelector, useDispatch } from 'react-redux'
const TaskPage = (props) => {
    const tasks = useSelector((state) => {
        return state.tasks
    })
    return (
        <div>
            <h1 className="TaskPageHeading">Task Management <br /> <br /> Total Tasks - {tasks.length}</h1>
            <div className="boxContainer">
                <TaskForm />
                <TaskList />
            </div>
        </div>
    )
}
export default TaskPage