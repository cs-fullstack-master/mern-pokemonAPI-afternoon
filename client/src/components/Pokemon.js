import React, {Component} from 'react';

export default class Pokemon extends Component {



    render() {

        return (
            <div className="pokemon grid-element">
                <h2>{this.props.pokemon}</h2>
                {/*I have all my local images in an /img directory under 'public' which gets mounted as '/' for static content like this*/}
                <a href={'/'+ this.props.pokedex_id}><img src={this.props.image} alt={this.props.pokemon}/></a>
            </div>
        );
    }
}