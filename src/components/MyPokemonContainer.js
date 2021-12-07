import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchMyPokemon, deletePokemon } from '../actions/pokeActions';
import PokemonCard from './PokemonCard';

class MyPokemonContainer extends Component {
    componentDidMount(){
        this.props.fetchMyPokemon();
    }
    
    render() {

        let listOfPokemon = this.props.mypokemon.map( pokemon => {
            return (
                <PokemonCard key={pokemon.id} pokemon={pokemon} onDelete={this.props.deletePokemon }/>
            );
        })
        return (
            <div>
                <p>Pokedex</p>
                <div className="container" style={{display:"flex", flexWrap:"wrap" }}>
                { listOfPokemon }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    mypokemon: state.combineRed.mypokemon
});

export default connect(mapStateToProps, { fetchMyPokemon, deletePokemon })(MyPokemonContainer);