import {ADD,ADDSYNC} from './constants'

export const add =(data)=>{
    return {
        type:ADD,
        data
    }
}
export const addsync =(data)=>{
    return {
        type:ADDSYNC,
        data
    }
}
