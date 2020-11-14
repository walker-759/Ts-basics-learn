import {AAA} from '../constants'
export const abc = (state=1,action={})=>{
    switch(action.type){
        case AAA:
            return state+1
        default:
            return state
    }
}