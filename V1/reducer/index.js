import {combineReducers} from 'redux'
import {user} from './user'
import {abc} from './abc'
// console.log(user);

export const reducer=combineReducers({user,abc})