import {ADD} from './constants'
export const num =(state={num:0},action)=>{
    switch(action.type){
        case ADD :
            return {num:state.num+action.data}
        default :
            return state
    }
}