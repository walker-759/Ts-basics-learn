import React from 'react'
import Home from './Home/Home'
import User from './User/User'
class App extends React.Component {
    state = {
    }
    render() {
        return (
            <>
                <Home />
                <User />
            </>
        )
    }
}
export default App