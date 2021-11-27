import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => (
    <div>
        <p>
            <h1>Pokedex</h1>
            <Link to="/mypokemon">See Pokemon</Link>
        </p>
    </div>
);

export default Home;