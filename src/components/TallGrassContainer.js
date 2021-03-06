import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon, fetchSinglePokemon, newPokemon } from '../actions/pokeActions'
import Button from './Button';
import TallGrass from './TallGrass';

class TallGrassContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            image: '',
            pokemontype: ''
        }
        // Handle the page
        this.walkInGrass = this.walkInGrass.bind(this);
        this.handleThrowPokeBall = this.handleThrowPokeBall.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // P
    // Lifecycle
    componentDidMount(){
        this.props.fetchPokemon();
        this.props.fetchSinglePokemon(Math.floor(Math.random()*150));
    }
    // Handle the page
    walkInGrass(event) { this.props.fetchSinglePokemon(Math.floor(Math.random()*150)); } // get a random pokemon
    handleThrowPokeBall(event) { console.log('trow ball') } // Try and catch a pokemon

    // Submit Form
    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        const pokemon = { name: this.props.singleMon.name, image: this.props.singleMon.sprites.front_default, pokemontype: this.props.singleMon.types[0].type.name
        };
        console.log(pokemon) // this.walkInGrass(); 
        this.props.newPokemon(pokemon);
        this.props.fetchSinglePokemon(Math.floor(Math.random()*150));
    }

    // Rendering
    render() {
        // console.log(this.props.singleMon)
        if(!this.props.singleMon.id) { return <p>"Not found "</p> }

        if((Math.floor(Math.random()*150)) >= (Math.floor(Math.random()*150))) {
            return (
                <div>
                    <Button onClick={this.walkInGrass}>🌿</Button>
                    <p>🌿Tall Grass. Try Again🌿</p>
                </div>
            )
        } else {
            return(
                <div>
                    <Button onClick={this.walkInGrass}>🌿</Button>
                    <form style={{background:"green"}}>
                        <Button onClick={this.onSubmit}>Catch Pokemon</Button>
                        <TallGrass image={this.props.singleMon.sprites.front_default} 
                            name={this.props.singleMon.name} 
                            type={this.props.singleMon.types[0].type.name} />
                    </form>
                </div>
            );
        }
        
    }
}
// attributes

// State
const mapStateToProps = state => ({ 
    pokemon: state.combineRed.pokemon,
    singleMon: state.combineRed.singleMon});

// Export
export default connect(mapStateToProps, { fetchPokemon, fetchSinglePokemon, newPokemon })(TallGrassContainer);