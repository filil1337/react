import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';

export default class App extends Component {



  render() {
    return (
      <div>
         <Router>
                <div className="App">
                    <div className="App-header">
                        <div className="nav">
                            <Link to="/react">Home</Link>
                            <Link to="/Contact">Contact</Link>
                        </div>
                    </div>
                    <div className="App-body">
                        <Route path="/react" exact component={Home}/>
                         <Route path="/Contact" component={Contact}/>
                    </div>
                </div>
            </Router>
    </div>
    )
  }

}
