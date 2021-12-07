import React from 'react'
import Button from './Button';
import { Link } from 'react-router-dom';
import './PokemonCard.css'

const PokemonCard = (props) => {


    return (
        <div key={props.pokemon.id} className="card">
        <p style={{textTransform:"capitalize"}}>{props.pokemon.name}</p>
        <img src={props.pokemon.image} alt=""/>
        <p>{props.pokemon.pokemontype}</p>
        <Button onClick={() => props.onDelete(props.pokemon.id)}>Release</Button>
        <Link to={`/pokedex/${props.pokemon.name}`}>View Pokemon</Link>
    </div>
    );
}

export default PokemonCard