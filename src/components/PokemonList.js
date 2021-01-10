import React from 'react';
import Pokemon from './Pokemon';

const PokemonList = ({ pokemonList }) => (
    <div className="pokemonList">
        { pokemonList.map((pokemon) => (
            <Pokemon
                baseExperience={ pokemon.base_experience }
                height={ pokemon.height }
                key={ pokemon.id }
                name={ pokemon.name }
                sprite={ pokemon.sprites.front_default }
                weight={ pokemon.weight }
            />
        ))}
    </div>
);

export default PokemonList;
