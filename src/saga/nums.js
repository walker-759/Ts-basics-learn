import {takeLatest,put,call,all} from 'redux-saga/effects'
import {ADD, ADDSYNC} from '../Home/redux/constants'
import {getaddsync} from '../api/index'
function* addsync1(){
    const [res]= yield all([call(getaddsync)])
    yield put({type:ADD,data:res.data.ok}) 
    
}
export function*watchaddsync(){
    yield takeLatest(ADDSYNC,addsync1)
}