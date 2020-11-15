import {all,fork} from 'redux-saga/effects'
// 引入小saga
import * as nums from './nums'
// import {watchuser,watchusername} from './users'
import * as users from './users'
// console.log(Object.values(a));


// 合并sage  组成跟sage   常规写法
// export default function*rootsaga(){
//     yield all( [
//         watchaddsync(),
//         watchuser(),
//         watchusername()
//     ])
// }


// 使用统一引入小的sage然后给别名  然后再 用Object.values  解成数组  在次用三点结构  汇成总的数组  最后用这个数组调map
// 然后参数传入saga 的api   fork   他可以并发执行

// all就是并发  也就是让数组里面的监听 并发执行   也可以用在并发请求上   使用方法和promise.all一样
export default function*rootsaga(){
    yield all( [
        ...Object.values(nums),
        ...Object.values(users)
    ].map(fork))
}