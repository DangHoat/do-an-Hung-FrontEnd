import React, { Component } from 'react'
import ReduxToastr from "react-redux-toastr";
import Routes from './route/Route'
import SignUp from "./pages/auth/SignUp"
import {Provider,connect} from "react-redux"

export class App extends Component {
    componentDidMount(){
        
    }
    render() {
        return (
            <Provider store={this.props.store}>
            <Routes />
            <ReduxToastr
                timeOut={5000}
                newestOnTop={true}
                position="top-right"
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                progressBar
                closeOnToastrClick
            />
        </Provider>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


