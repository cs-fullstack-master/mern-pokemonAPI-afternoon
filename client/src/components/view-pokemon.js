import React, {Component} from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Redirect} from "react-router-dom";

export default class ViewPokemon extends Component {
    pokedex_uri = 'https://pokeapi.co/api/v2/pokemon/';

    constructor(props) {
        super(props);
        this.state = {
            pokedex_id: this.props.match.params.id,
            pokemon_abilities: [],
            pokemon_moves: [],
            pokemon_sprites: [],
            toHomePage: false,
        };
    }

    componentDidMount() {
        fetch(this.pokedex_uri + this.props.match.params.id)
            .then(data => data.json())
            .then(response => {
                this.setState({
                    pokemon_abilities: response.abilities,
                    pokemon_moves: response.moves,
                    pokemon_sprites: response.sprites
                })
            })
            .catch(function (error) {
                console.log(error);
            })


    }



    render() {
        if (this.state.toHomePage === true) {
            return <Redirect to={'/'}/>
        }

        let abilities = this.state.pokemon_abilities ? this.state.pokemon_abilities.map((item, key) =>
            <li key={item.ability.url}>{item.ability.name}</li>) : [];

        let moves = this.state.pokemon_moves ? this.state.pokemon_moves.map((item, key) =>
            <li key={item.move.url}>{item.move.name}</li>):[];

        // let sprites= this.state.pokemon_sprites ? this.state.pokemon_sprites.map((item, key) =>
        //      <img src={item} alt="Pokemon Image"/>):[];

        let sprites = <img src={this.state.pokemon_sprites.front_default} alt="Pokemon"/>

        console.log(this.state.pokemon_sprites);

        return (
            <div className="grid-container">
                <div className="grid-item">View Pokemon
                <ul>Abilities:
                    {abilities}
                </ul>
                <ul>Moves:
                    {moves}
                </ul>
                </div>
                <div className="grid-images">
                    {sprites}
                </div>
            </div>
        )
    }
}