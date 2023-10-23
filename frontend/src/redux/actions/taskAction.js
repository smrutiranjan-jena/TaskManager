import axios from 'axios'
export const startAddTask = (taskData) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.post('http://localhost:3009/api/users/tasks', taskData)
            console.log(response.data)
            dispatch(addTask(response.data))
        } catch (err) {
            console.log(err)
        }
    }
}
export const startGetAllTask = () => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.get('http://localhost:3009/api/users/tasks/all')
            dispatch(getAllTask(response.data))
        } catch (err) {
            console.log(err)
        }
    }
}
export const startEditTask = (id, editData) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.put(`http://localhost:3009/api/users/tasks/${id}`, editData)
            dispatch(editTask(editData))
        } catch (err) {
            console.log(err)
        }
    }
}
export const startDeleteTask = (id) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.delete(`http://localhost:3009/api/users/tasks/${id}`)
            dispatch(deleteTask(id))
        } catch (err) {
            console.log(err)
        }
    }
}
export const startEditTaskStatus = (id, editData) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.put(`http://localhost:3009/api/users/tasks/${id}`, editData)
            dispatch(editTaskStatus(editData))
        } catch (err) {
            console.log(err)
        }
    }
}



export const addTask = (task) => {
    return {
        type: "ADD_TASK",
        payload: task
    }
}
export const getAllTask = (tasks) => {
    return {
        type: "GET_ALL_TASK",
        payload: tasks
    }
}
export const editTask = (id, editData) => {
    return {
        type: "EDIT_TASK",
        payload: {
            taskId: id,
            editData: editData
        }
    }
}
export const deleteTask = (taskId) => {
    return {
        type: "DELETE_TASK",
        payload: taskId
    }
}
export const editTaskStatus = (id, editData) => {
    return {
        type: "EDIT_TASK_STATUS",
        payload: {
            taskId: id,
            editData: editData
        }
    }
}