// 引入需要的api
// takeEvery监视同步action的
// call  视频推荐用他包住异步请求
// put 提交action 的
import { takeEvery, call, put } from 'redux-saga/effects'
// 引入api
import { getuserapi, getusernameapi } from '../api/index'
// 获取用户   生成器函数  执行异步动作的
function* getuser() {
    // 首先要trycatch一下  万一错误 发什么action
    try {
        // yield  后面用call方法包住异步请求   视频说的 没啥用
        const res = yield call(getuserapi)
        console.log(res);
        // put就跟dispatch一样  提交action的  不用管对应的reducer能不能执行  因为肯定能
        yield put({ type: 'USERSUCCESS', data: res.data.user })
    } catch (error) {
        // 判断失败了提交啥action
        console.log(error);
        yield put({ type: 'ERR' })
        
    }
}

// 小saga  用来监视不同action  然后执行对应生成器的  需要暴露出去  合并成总saga
export function* watchuser() {
    yield takeEvery('USER', getuser)
}


// 获取用户名
function* getusername() {
    const res = yield call(getusernameapi)
    console.log(res);
    yield put({ type: 'USERNAMESUCCESS', data: res.data.name })


}
export function* watchusername() {
    yield takeEvery('USERNAME', getusername)
}
