
import React, {Component} from 'react';

export default class Pokemon extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <p>{this.props.pokemon_name}</p>
                <p>{this.props.pokemon.img}</p>
                <hr/>
            </div>
        )
    }
}