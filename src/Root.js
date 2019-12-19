import React, {Component} from 'react';
import Home from './components/Home';
import App from './App'
import { BrowserRouter , Switch, Route, Redirect } from 'react-router-dom';
import SignIn from './components/SignIn';



class Root extends Component{
    constructor(props){
        super(props);

        this.state={
            userName:''
        }
    }

    getUserName = (e) =>{
       this.setState({
           userName: e.target.value
       });
    }
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/Home" component={Home}/>
                        <Route path="/SignIn" component={SignIn} />
                        <Route path="/App" component={App} />
                        <Redirect to="/Home"/> 
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Root;