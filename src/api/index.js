import axios from 'axios'
export const getaddsync =()=>{
    return axios({
        method:'GET',
        url:'/addsync'
    })
}

export const getuserapi =()=>{
    return axios({
        method:'GET',
        // 这里面演示  saga错误  正常的 路径是  /user
        url:'/user111'
    })
}
export const getusernameapi =()=>{
    return axios({
        method:'GET',
        url:'/username'
    })
}