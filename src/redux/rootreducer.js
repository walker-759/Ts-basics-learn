import {num} from '../Home/redux/reducer'
import {users} from '../User/redux/reducers'
import {combineReducers} from 'redux'
// console.log(users);

export const rootreducers = combineReducers({num,users})
