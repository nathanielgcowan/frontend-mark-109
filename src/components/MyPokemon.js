import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMyPokemon } from '../actions/pokeActions'

class MyPokemon extends Component {
    componentWillMount(){
        this.props.fetchMyPokemon();
    }

    render() {
        console.log(this.props.mypokemon)
        let listOfPokemon = this.props.mypokemon.map( pokemon => {
            return (
                <div key={pokemon.id}>
                    <p>{pokemon.name}</p>
                    <img src={pokemon.image} alt=""/>
                    <p>{pokemon.pokemontype}</p>

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
    mypokemon: state.combineRed.mypokemon
});

export default connect(mapStateToProps, { fetchMyPokemon })(MyPokemon);