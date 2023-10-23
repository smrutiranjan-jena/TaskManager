const initialState = []
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK": {
            return [...state, action.payload]
        } case "GET_ALL_TASK": {
            return [...action.payload]
        } case "EDIT_TASK": {
            return state.map((ele) => {
                if (ele._id === action.payload.taskId) {
                    return [...state, ele.title = action.payload.editData.title, ele.description = action.payload.editData.description]
                } else {
                    return { ...ele }
                }
            })
        } case "DELETE_TASK": {
            const result = state.filter((ele) => {
                return ele !== action.payload
            })
            return [...result]
        } case "EDIT_TASK_STATUS": {
            return state.map((ele) => {
                if (ele._id === action.payload.taskId) {
                    return [...state, ele.status = action.payload.editData.status]
                } else {
                    return { ...ele }
                }
            })
        } default: {
            return [...state]
        }
    }
}
export default taskReducer