// @flow
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import './styles.css';
import {Home} from './home';

const NoMatch = () =>{
    return (
        <div className='container'>
            <h2>No Match</h2>
        </div>
    )
}

export class HomePage extends Component {
  render() {
    return (
        <div className="App">
        <Router>
            <div >
                <div className="menu">
                 <ul>
                      <li><Link to="/">Home</Link></li>
                  </ul>
                </div>

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        </Router>
    </div>
    )
  }
};