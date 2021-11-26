import React from 'react'
import Button from './Button';
import { Link } from 'react-router-dom';

const PokemonCard = (props) => {
    const card = {
        border: "1px solid black",
        borderRadius: "5px",
        margin: "5px",
        minWidth: "200px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white"
    }

    return (
        <div key={props.pokemon.id} className="card" style={card}>
        <p style={{textTransform:"capitalize"}}>{props.pokemon.name}</p>
        <img src={props.pokemon.image} alt=""/>
        <p>{props.pokemon.pokemontype}</p>
        <Button onClick={() => props.onDelete(props.pokemon.id)}>Release</Button>
        <Link to={`/pokedex/${props.pokemon.name}`}>View Pokemon</Link>
    </div>
    );
}

export default PokemonCard