import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Pokedex from './components/Pokedex';
import MyPokemon from './components/MyPokemon';
import TallGrass from './components/TallGrass';
import ViewPokemon from './components/ViewPokemon';

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pokedex">Pokedex</Link>
          </li>
          <li>
            <Link to="/mypokemon">My Pokemon</Link>
          </li>
          <li>
            <Link to="/tallgrass">Tall Grass</Link>
          </li>
        </ul>
      </nav>

      { /* Route components are rendered if the path prop matches the current URL */}
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/pokedex"><Pokedex /></Route>
        <Route exact path="/pokedex/:id" render={props => (<ViewPokemon pokeId={props.match.params.id} />)} />
        <Route exact path="/mypokemon"><MyPokemon /></Route>
        <Route exact path="/tallgrass"><TallGrass /></Route>
      </Switch>
    </div>
  );
}
