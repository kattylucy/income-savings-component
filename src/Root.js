import React, {Component} from 'react';
import App from './App'
import { BrowserRouter , Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Home from './components/Home';



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
                        <Route path="/home" render={()=> <Home userName={this.state.userName} event={this.getUserName}/>}/>
                        <Route path="/App" render={()=> <App userName={this.state.userName}/>} />
                        <Redirect to="/home"/> 
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Root;