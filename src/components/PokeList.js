import React from 'react';
import { Link } from 'react-router-dom';
import './PokemonCard.css'

const PokeList = (props) => {
    const style ={
        border: "2px solid black",
        borderRadius: "5px",
        margin: "5px",
        minWidth: "200px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white"
    }
    return (
        <div key={props.id} style={style}>
            <p>{props.name}</p>
        <Link to={`/pokedex/${props.name}`}>View Pokemon</Link>
    </div>
    );
}

export default PokeList;