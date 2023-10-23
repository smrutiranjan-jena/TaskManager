import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { startAddTask } from '../redux/actions/taskAction'
const TaskForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [assignee, setAssignee] = useState('')
    const [priority, setPriority] = useState('')
    const dispatch = useDispatch()
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }
    const handleDueDateChange = (e) => {
        setDueDate(e.target.value)
    }
    const handleAssigneeChange = (e) => {
        setAssignee(e.target.value)
    }
    const handlePriorityChange = (e) => {
        setPriority(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const taskData = {
            title: title,
            description: description,
            duedate: dueDate,
            assignee: assignee,
            priority: priority
        }
        dispatch(startAddTask(taskData))
        const reset = () => {
            setTitle('')
            setDescription('')
            setDueDate('')
            setAssignee('')
        }
        reset()
    }
    return (
        <div>
            <div className="FormContainer">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Title' value={title} onChange={handleTitleChange} /><br />
                    <textarea cols="21" rows="4" placeholder='Description' value={description} onChange={handleDescriptionChange} />
                    <input type="date" placeholder='Title' value={dueDate} onChange={handleDueDateChange} /><br />
                    <input type="text" placeholder='assignee name' value={assignee} onChange={handleAssigneeChange} /><br />
                    <select onChange={handlePriorityChange} >
                        <option >Priority Level</option>
                        <option value="easy">easy</option>
                        <option value="medium">medium</option>
                        <option value="hard">hard</option>
                    </select>
                    <input type="submit" className='btn' value="Add Task" /><br />
                </form>
            </div>
        </div>
    )
}
export default TaskForm