import React, {Component} from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";

export default class ViewPokemon extends Component {
    pokedex_uri = 'https://pokeapi.co/api/v2/pokemon/'; // Here's the base URI for Pokemon details

    // Hang onto a few properties for display
    constructor(props) {
        super(props);
        this.state = {
            pokedex_id: this.props.match.params.id,
            pokemon_abilities: [],
            pokemon_moves: [],
            pokemon_sprites: [],
        };
    }

    // Retrieve the selected Pokemon's details
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

// Renders a rather ugly Pokemon details
    render() {
// Pokemon abilities
        let abilities = this.state.pokemon_abilities ? this.state.pokemon_abilities.map((item, key) =>
            <li key={item.ability.url}>{item.ability.name}</li>) : [];
// Pokemon Moves
        let moves = this.state.pokemon_moves ? this.state.pokemon_moves.map((item, key) =>
            <li key={item.move.url}>{item.move.name}</li>) : [];


        return (
            <div className="grid-container">
                <div className="grid-item">
                    <ul><h1>Abilities</h1>
                        {abilities}
                    </ul>
                    <ul><h1>Moves</h1>
                        {moves}
                    </ul>
                </div>
                <div className="grid-images">
                    {/*{FIXME: Only getting some of the images}*/}
                    <img src={this.state.pokemon_sprites.front_default} alt="Pokemon"/>
                    <img src={this.state.pokemon_sprites.back_default} alt="Pokemon"/>
                    <img src={this.state.pokemon_sprites.front_shiny} alt="Pokemon"/>
                </div>
            </div>
        )
    }
}