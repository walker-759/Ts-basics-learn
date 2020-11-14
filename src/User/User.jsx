import React from 'react'
import { connect } from 'react-redux'
import { getuser, getusername } from './redux/actions'
class User extends React.Component {
    state = {
    }
    getuser = () => {
        // 就是判断是不是网络错误  然后渲染不同的东西
        if(this.props.user.user || this.props.user.err){
            return
        }
        this.props.getuser()
    }
    getusername = () => {
        if(this.props.user.name || this.props.user.err){
            return
        }
        this.props.getusername()
    }
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        const { user, name, login, err } = this.props.user
        return (
            <>
                <h1>{login ? 'Login....' : ''}</h1>
                <h1>{err ? '网络错误' : ''}</h1>
                <p>{user?user:''}</p>
                <p>{name?name:''}</p>
                <button onClick={this.getuser}>获取用户信息</button>
                <button onClick={this.getusername}>获取用户名字</button>
            </>
        )
    }
}
export default connect((state) => ({ user: state.users }), { getuser, getusername })(User)