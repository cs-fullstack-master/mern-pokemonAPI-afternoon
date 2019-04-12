import React, {Component} from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Pokemon from './Pokemon';


export default class ListPokemon extends Component {
    pokedex_uri = "https://pokeapi.co/api/v2/pokemon?limit=100";

    constructor(props) {
        super(props);
        this.state = {
            pokemon: [], // This will hold my FULL list of Pokemon
            filteredPokemon: [] // This will hold my Filtered list of Pokemon
        };
    }


// Lets load up our current list once component mounted
    componentDidMount()
    {
        this.fetchPokemon();
        console.log("Response = " + this.state.pokemon);
    }

// Grab those Pokemon from the backend web service
    fetchPokemon()
    {
        console.log(`Fetching Pokemon: ${this.pokedex_uri}`);
        fetch(this.pokedex_uri)
            .then(response => {
                if (!response.ok) {
                    throw Error("Failed connection to the Pokedex API")
                }
                console.log(response);
                return response
            })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    requestFailed: false
                });
                // We only keep the first 800 Pokemon we have pictures for. Remove the MAX call to catch em all
                // We also reset the filtered list of pokemon
                this.setState({
                    pokemon: response.results,
                    filteredPokemon: response.results
                })
            })
    }


    render()
    {
        return (
            <div>
            {this.state.filteredPokemon.map((pokemon, index) => {
                let parts = pokemon.url.split('/');
                let img =   parts[parts.length-1]+".png";
                    return (
                        <Pokemon pokemon_name = {pokemon.name} pokemon_img={img}/>
                    );
                })}
            </div>
        )
    }
}
