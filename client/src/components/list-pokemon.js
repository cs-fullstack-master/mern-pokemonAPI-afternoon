import React, {Component} from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Pokemon from './Pokemon';


export default class ListPokemon extends Component {
    pokedex_uri = "https://pokeapi.co/api/v2/pokemon?limit=100";

    constructor(props) {
        super(props);
        this.state = {
            pokemon_list: []
        }
    }

    componentDidMount() {
        this.loadData();
    }

    //fetch pokemon_list
    loadData = () => {
        fetch(this.pokedex_uri)
            .then(data => data.json())
            .then(jsonData => this.setState({pokemon_list: jsonData.results}))
    };

    //pass pokemon_list to StylePoke
    render() {
        return (
            this.state.pokemon_list.map((pokemon) => {
                // FIXME: Should really make a second request to get the image from web service
                let pokemon_url_parts = pokemon.url.split('/');
                let pokemon_id = pokemon_url_parts[6];
                return (
                    <div key={pokemon.name}>
                        <Pokemon pokemon={pokemon.name} image={'/img/' + pokemon_id + '.png'} pokedex_id = {pokemon_id}/>
                    </div>
                )
            }))

    }
}

