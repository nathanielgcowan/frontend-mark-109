import React from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {
    render() {    
        return (
            <nav className="Nav">
                <div>
                    <Link className="Nav__" to="/">Home</Link>{' '}
                    <Link className="Nav__" to="/pokedex">Pokedex</Link>{' '}
                    <Link className="Nav__" to="/mypokemon">My Pokemon</Link>{' '}
                    <Link className="Nav__" to="/tallgrass">Tall Grass</Link>
                </div>
            </nav>
        );
    }
}