import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import ListPokemon from './components/list-pokemon';
import ViewPokemon from './components/view-pokemon';

class App extends Component {
    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src="/images/header.png?text=Logo" width={500} alt=""/>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                                aria-label="Toggle navigation">
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Home
                                        <span className="sr-only">(current)</span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>

                <Route path="/" exact component={ListPokemon}/>
                <Route path="/:id" component={ViewPokemon}/>
            </Router>

        );
    }
}

export default App;
