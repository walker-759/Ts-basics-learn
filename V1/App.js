
// import './App.css';
import {connect} from 'react-redux'
import {add1} from './action/abc'
function App(props) {
  function add(){
    console.log('1');
    
    props.add1()
  }
  return (
    <div className="App">
      {props.abc}
      <button onClick={add}>+</button>
    </div>
  );
}

export default connect((state)=>({abc:state.abc}),{add1})(App)


// https://jsonplaceholder.typicode.com/users
