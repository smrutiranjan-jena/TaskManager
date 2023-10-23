import React, { useState, useEffect } from 'react';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux'
import { startGetAllTask, startEditTask, startDeleteTask, startEditTaskStatus } from '../redux/actions/taskAction';
const TaskList = () => {
    useEffect(() => {
        dispatch(startGetAllTask())
    }, [])
    const dispatch = useDispatch()
    const [open, setOpen] = useState('')
    const [search, setSearch] = useState('')
    const [status, setStatus] = useState('')
    const [priority, setPriority] = useState('')
    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    }
    const handleStatusChange = (e) => {
        setStatus(e.target.value)
    }
    const handlePriorityChange = (e) => {
        setPriority(e.target.value)
    }
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    }
    const tasks = useSelector((state) => {
        return state.tasks
    })
    console.log(tasks)
    const result = tasks.filter((ele) => {
        return ele.assignee.toLowerCase().includes(search) && ele.status.includes(status) && ele.priority.includes(priority)
    })
    console.log(result)
    const editTask = (id) => {
        const title = prompt('enter task title')
        const description = prompt('enter task description')
        const editTaskData = {
            title: title,
            description: description
        }
        if (title && description) {
            dispatch(startEditTask(id, editTaskData))
            window.location.reload()
        }
    }
    const deleteTask = (id) => {
        dispatch(startDeleteTask(id))
        window.location.reload()
    }
    const editTaskStatus = (id, value) => {
        const editData = {
            status: value
        }
        dispatch(startEditTaskStatus(id, editData))
        window.location.reload()
    }
    return (
        <div>
            <form className='formCon'>
                <input type="search" value={search} onChange={handleSearchChange} placeholder='search by assignee' />
                <select onChange={handleStatusChange}>
                    <option >status</option>
                    <option value="to-do">to-do</option>
                    <option value="in-progress">in-progress</option>
                    <option value="completed">completed</option>
                </select>
                <select onChange={handlePriorityChange} >
                    <option >Priority Level</option>
                    <option value="easy">easy</option>
                    <option value="medium">medium</option>
                    <option value="hard">hard</option>
                </select>
            </form>
            <div className='taskListContainer'>
                {result.map((ele) => {
                    return <Accordion flush open={open} toggle={toggle} className='taskListAcc' >
                        <AccordionItem className='acc-item' >
                            <AccordionHeader targetId={ele._id} className='acc-header'>
                                {ele.assignee}
                                <span className='acc-icon'>
                                    <i className="fa fa-edit" onClick={() => {
                                        editTask(ele._id)
                                    }}></i>
                                    <i className="fa fa-remove" onClick={() => {
                                        deleteTask(ele._id)
                                    }}></i>
                                </span>
                            </AccordionHeader>
                            <AccordionBody accordionId={ele._id} >
                                <b>Task Title - </b>{ele.title}<br />
                                <b>Task Description - </b>{ele.description}<br />
                                <b>Priority Level - </b>{ele.priority}<br />
                                <b>dueDate - </b>{new Date(ele.duedate).toLocaleDateString()}<br />
                                <b>status - </b>{ele.status}&nbsp;&nbsp;
                                {ele.status === "to-do" ? (
                                    <span>
                                        <button onClick={() => {
                                            editTaskStatus(ele._id, "in-progress")
                                        }}>set as in-progress</button>
                                        &nbsp;&nbsp;<button onClick={() => {
                                            editTaskStatus(ele._id, "completed")
                                        }}>set as completed</button>
                                    </span>
                                ) : ele.status === "in-progress" ? (
                                    <button onClick={() => {
                                        editTaskStatus(ele._id, "completed")
                                    }}>set as completed</button>
                                ) : ele.status === "completed" ? (
                                    <button onClick={() => {
                                        editTaskStatus(ele._id, "in-progress")
                                    }}>set as in-progress</button>
                                ) : (
                                    null
                                )}

                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                })}
            </div>
        </div>
    );
}

export default TaskList;