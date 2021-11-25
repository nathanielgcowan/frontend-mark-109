import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon, fetchSinglePokemon } from '../actions/pokeActions'

class TallGrass extends Component {
    constructor(props){
        super(props)
        this.walkInGrass = this.walkInGrass.bind(this);
        this.handleThrowPokeBall = this.handleThrowPokeBall.bind(this);
    }
    UNSAFE_componentWillMount(){
        this.props.fetchPokemon();
        this.props.fetchSinglePokemon(Math.floor(Math.random()*150));
    }

    walkInGrass(event) { this.props.fetchSinglePokemon(Math.floor(Math.random()*150)); } // get a random pokemon
    handleThrowPokeBall(event) { console.log('trow ball') } // Try and catch a pokemon

    render() {
        // console.log(this.props.singleMon)
        if(!this.props.singleMon.id) {
            return <p>"Not found "</p>
        }
        let first = Math.floor(Math.random()*150);
        let second = Math.floor(Math.random()*150);
        if(first >= second ){
            return (
                <div>
                    <button onClick={this.walkInGrass}>🌿</button>
                    <p>🌿Tall Grass. Try Again🌿</p>
                </div>
            )
        } else {
            return(
                <div>
                    <button onClick={this.walkInGrass}>🌿</button>
                        <div>
                            <p><img src={this.props.singleMon.sprites.front_default} alt=""/></p>{' '}
                            <p>Name: {this.props.singleMon.name}</p>{' '}
                            <p>Type: {this.props.singleMon.types[0].type.name}</p>
                        </div>
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({
    pokemon: state.combineRed.pokemon,
    singleMon: state.combineRed.singleMon
});

export default connect(mapStateToProps, { fetchPokemon, fetchSinglePokemon })(TallGrass);