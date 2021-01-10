import React from 'react';

const Pokemon = ({ baseExperience, height, name, sprite, weight }) => (
    <div className="pokemon">
        <h3>{ name }</h3>
        <img src={ sprite } alt={ name } />
        <p>Height: { height / 10 }m</p>
        <p>Weight: { weight / 10 }kg</p>
        <p>Base Experience: { baseExperience }</p>
    </div>
);

export default Pokemon;
