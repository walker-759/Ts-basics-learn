import {takeEvery,takeLatest,put,call,all} from 'redux-saga/effects'
import {ADD, ADDSYNC} from '../Home/redux/constants'
import {getaddsync,getuserapi} from '../api/index'
function* addsync1(data){

    // 常规写法
    // const res= yield getaddsync()
    // yield put({type:ADD,data:res.data.ok})

    // 使用call写法  说是方便测试  我也不知道  反正就是把异步apipromise 放在call里面  ，参数依次往后写
    // const res= yield call(getaddsync)
    // yield put({type:ADD,data:res.data.ok}) 

    // 使用all和call方法  并发请求
    const [res]= yield all([call(getaddsync)])
    yield put({type:ADD,data:res.data.ok}) 
    
}

// 多次提交的action 都会依次进入队列执行  使用takeEvery
// export function*watchaddsync(){
//     yield takeEvery(ADDSYNC,addsync1)
// }

// 连续多次提交的action   只会执行一次  因为用的是takeLatest  关键字
function*watchaddsync(){
    yield takeLatest(ADDSYNC,addsync1)
}




// 用户信息演示
function* getuser(){
    const res= yield call(getuserapi)
    console.log(res);
    
}

function* watchuser(){
    yield takeEvery('USER',getuser)
}




// 合并saga

// yield语句后面  跟上[]代表数组里面的内容是并发执行的   其实有点像合并reducer
export default function*rootsaga(){
    yield all( [
        watchaddsync(),
        watchuser()
    ])
}