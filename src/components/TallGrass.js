import React from 'react'

const TallGrass = (props) => {
    return (
        <div>
            <p><img src={ props.image } alt=""/></p>{' '}
            <p>Name: { props.name }</p>{' '}
            <p>Type: { props.type }</p>
        </div>
    );
}

export default TallGrass;