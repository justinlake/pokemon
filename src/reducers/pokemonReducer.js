import {
    FETCH_POKEMON_ERROR,
    FETCH_POKEMON_PENDING,
    FETCH_POKEMON_SUCCESS,
    FETCH_RANDOM_POKEMON_ERROR,
    FETCH_RANDOM_POKEMON_PENDING,
    FETCH_RANDOM_POKEMON_SUCCESS
} from '../actions/pokemonActions';

const initialState = {
    error: null,
    pending: false,
    pokemonList: [],
    randomError: null,
    randomPending: false,
    randomPokemon: null,
}

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POKEMON_ERROR:
            return {
                ...state,
                error: action.error,
                pending: false
            }
        case FETCH_POKEMON_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_POKEMON_SUCCESS:
            return {
                ...state,
                pending: false,
                pokemonList: [...state.pokemonList, action.payload]
            }
        case FETCH_RANDOM_POKEMON_ERROR:
            return {
                ...state,
                randomError: action.error,
                randomPending: false
            }
        case FETCH_RANDOM_POKEMON_PENDING:
            return {
                ...state,
                randomPending: true
            }
        case FETCH_RANDOM_POKEMON_SUCCESS:
            return {
                ...state,
                randomPending: false,
                randomPokemon: action.payload
            }
        default:
            return state;
    }
}

export default pokemonReducer;
