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

    walkInGrass(event) {this.props.fetchSinglePokemon(Math.floor(Math.random()*150)); }
    handleThrowPokeBall(event) { console.log('trow ball') }

    render() {
        console.log(this.props.singleMon)
        if(!this.props.singleMon.id) {
            return <p>"Not found "</p>
        }
        return(
            <div>
                <button onClick={this.walkInGrass}>🌿</button>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Photo</th>
                        <th>Type</th>
                    </tr>
                    <tr>
                        <td>{this.props.singleMon.name}</td>
                        <td>{this.props.singleMon.id}</td>
                        <td><img src={this.props.singleMon.sprites.front_default} /></td>
                        <td>{this.props.singleMon.types[0].type.name}</td>
                    </tr>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    pokemon: state.combineRed.pokemon,
    singleMon: state.combineRed.singleMon
});

export default connect(mapStateToProps, { fetchPokemon, fetchSinglePokemon })(TallGrass);