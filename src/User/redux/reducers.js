export const users = (state = { user: '', name: '' ,err:false , login:false }, action) => {
    switch (action.type) {
        case 'USERSUCCESS':
            return { ...state, user: action.data,login:false }
        case "USERNAMESUCCESS":
            return { ...state, name: action.data,login:false }
        case "USER":
            return {...state,login:true}
        case "USERNAME":
            return {...state,login:true}
        case "ERR":
            return {...state,err:true,login:false}
        default:
            return state
    }
}

// 根据不同的action  做出不同的动作



// export const num = (state = { num: 0 }, action) => {
//     switch (action.type) {
//         case ADD:
//             return { num: state.num + action.data }
//         default:
//             return state
//     }
// }