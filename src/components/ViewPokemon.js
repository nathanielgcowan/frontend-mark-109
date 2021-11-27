import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchSinglePokemon } from '../actions/pokeActions';
import { Link } from 'react-router-dom';

class ViewPokemon extends Component {
    componentDidMount() {
        this.props.fetchSinglePokemon(this.props.pokeId);
    }
    render() {
        console.log(this.props.singleMon)
        if(!this.props.singleMon.id) {
            return <p>"Not found "</p>
        }
        // { this.props.singleMon.held_items[0].item.name }
        return(
            <div>
                <table>
                <tr>
                    <td><img src={this.props.singleMon.sprites.front_default} alt=""/></td>
                </tr>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Ability</th>
                    <th>Move</th>
                    <th>Base Experience</th>
                </tr>
                <tr>
                    <td>{this.props.singleMon.name}</td>
                    <td>{this.props.singleMon.types[0].type.name}</td>
                    <td>{ this.props.singleMon.abilities[0].ability.name }</td>
                    <td> { this.props.singleMon.moves[0].move.name }</td>
                    <td> { this.props.singleMon.base_experience }</td>
                </tr>
                <tr>
                    <th>Form</th>
                    <th>Version</th>
                    <th>Height</th>
                </tr>
                <tr>
                    <td> { this.props.singleMon.forms[0].name }</td>
                    <td> { this.props.singleMon.game_indices[0].version.name }</td>
                    <td> { this.props.singleMon.height }</td>
                </tr>
                </table>
                <Link className="Nav__" to="/pokedex">Pokedex</Link>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {singleMon: state.combineRed.singleMon}
}

export default connect(mapStateToProps, { fetchSinglePokemon })(ViewPokemon);