import React, {Component} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import App from '../App';



function Home(props){
        return(
        <div className="homepage">
            <h5 className="mb-3">Welcome, type your name to start</h5>
            <form>
                <label htmlFor="name"></label>
                <input type="text" onChange={props.event}></input>
                <Link className="link" to="/App">
                    <button className="mt-3 btn btn-success">Start Saving</button>
                </Link>
            </form>
        </div>   
    )
}

export default Home;