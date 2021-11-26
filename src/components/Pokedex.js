import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPokemon } from '../actions/pokeActions'
import { Link } from 'react-router-dom';

class Pokedex extends Component {
    componentDidMount(){
        this.props.fetchPokemon();
    }

    render() {
        console.log(this.props.pokemon.results)
        if(!this.props.pokemon.results) {
            return <p>"Not found "</p>
        }
        let listOfPokemon = this.props.pokemon.results.map( pokemon => {
            const urlarray = pokemon.url.split("/")
            const id = urlarray[urlarray.length-2]
            console.log(id)
            return (
                <div key={id}>
                    <p>{pokemon.name}</p>
                    <Link to={`/pokedex/${id}`}>View Pokemon</Link>

                </div>
            );
        })
        return (
            <div>
                <div>Pokedex</div>
                <p>{ listOfPokemon }</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    pokemon: state.combineRed.pokemon
});

export default connect(mapStateToProps, { fetchPokemon })(Pokedex);