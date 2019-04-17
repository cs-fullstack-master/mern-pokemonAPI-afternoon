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
                {/*Build a simple Nav bar*/}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link to="/" className="navbar-brand">Pokedex</Link>
                </nav>
                {/*TODO: Fix this lousy grid*/}
                <div className="grid-container grid-container--fill">
                    <Route path="/" exact component={ListPokemon}/>
                    <Route path="/:id" component={ViewPokemon}/>
                </div>

            </Router>

        );
    }
}

export default App;
