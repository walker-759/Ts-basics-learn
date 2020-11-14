import React from 'react'
import {connect} from 'react-redux'
import {add,addsync} from './redux/action'
class Home extends React.Component {
    state = {
    }
    componentDidMount(){
        console.log(this.props);
    }
    add=()=>{
        this.props.add(1)
    }
    addsync=()=>{
        this.props.addsync()
    }
    
    render() {
        return (
            <>
                <p>{this.props.num.num}</p>
                <button onClick={this.add}>同步加1</button>
                <button onClick={this.addsync}>异步加1</button>
                
            </>
        )
    }
}
export default connect((state)=>({num:state.num}),{add,addsync})(Home)