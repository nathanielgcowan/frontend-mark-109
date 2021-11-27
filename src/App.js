import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Pokedex from './components/Pokedex';
import MyPokemonContainer from './components/MyPokemonContainer';
import TallGrassContainer from './components/TallGrassContainer';
import ViewPokemon from './components/ViewPokemon';
import Navigation from './theseComponents/Navigation';
import BackpackContainer from './theseComponents/BackpackContainer';
import './App.css';

export default function App() {
  return (
    <div>
      <Navigation />
      { /* Route components are rendered if the path prop matches the current URL */}
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/pokedex"><Pokedex /></Route>
        <Route exact path="/pokedex/:id" render={props => (<ViewPokemon pokeId={props.match.params.id} />)} />
        <Route exact path="/mypokemon"><MyPokemonContainer /></Route>
        <Route exact path="/tallgrass"><TallGrassContainer /></Route>
        <Route exact path="/backpack"><BackpackContainer /></Route>
      </Switch>
    </div>
  );
}
