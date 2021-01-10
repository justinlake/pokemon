export const FETCH_POKEMON_ERROR = 'FETCH_POKEMON_ERROR';
export const FETCH_POKEMON_PENDING = 'FETCH_POKEMON_PENDING';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_RANDOM_POKEMON_ERROR = 'FETCH_RANDOM_POKEMON_ERROR';
export const FETCH_RANDOM_POKEMON_PENDING = 'FETCH_RANDOM_POKEMON_PENDING';
export const FETCH_RANDOM_POKEMON_SUCCESS = 'FETCH_RANDOM_POKEMON_SUCCESS';

export const fetchPokemonError = (error) => ({
    type: FETCH_POKEMON_ERROR,
    payload: error
});

export const fetchPokemonPending = () => ({
    type: FETCH_POKEMON_PENDING
});
    
export const fetchPokemonSuccess = (pokemon) => ({
    type: FETCH_POKEMON_SUCCESS,
    payload: pokemon
});

export const fetchRandomPokemonError = (error) => ({
    type: FETCH_RANDOM_POKEMON_ERROR,
    payload: error
});

export const fetchRandomPokemonPending = () => ({
    type: FETCH_RANDOM_POKEMON_PENDING
});

export const fetchRandomPokemonSuccess = (pokemon) => ({
    type: FETCH_RANDOM_POKEMON_SUCCESS,
    payload: pokemon
});
