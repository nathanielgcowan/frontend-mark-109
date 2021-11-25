import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchSinglePokemon } from '../actions/pokeActions';

class ViewPokemon extends Component {
    componentWillMount() {
        this.props.fetchSinglePokemon(this.props.pokeId);
    }
    render() {
        console.log(this.props.singleMon)
        if(!this.props.singleMon.id) {
            return <p>"Not found "</p>
        } 
        return(
            <div>
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
                        <td><img src={this.props.singleMon.sprites.back_default} alt=""/></td>
                        <td>{this.props.singleMon.types[0].type.name}</td>
                    </tr>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {singleMon: state.combineRed.singleMon}
}

export default connect(mapStateToProps, { fetchSinglePokemon })(ViewPokemon);