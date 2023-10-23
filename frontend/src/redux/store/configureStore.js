import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import taskReducer from '../reducers/taskReducer'
const configureStore = () => {
    const store = createStore(combineReducers({
        tasks: taskReducer
    }), applyMiddleware(thunk))
    return store
}
export default configureStore