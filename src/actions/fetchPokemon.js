import { fetchPokemonError, fetchPokemonPending, fetchPokemonSuccess } from './pokemonActions'

const fetchPokemon = (id)  => {
    return dispatch => {
        dispatch(fetchPokemonPending());
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => res.json())
        .then((pokemon) => {
            dispatch(fetchPokemonSuccess(pokemon));
            return pokemon;
        })
        .catch(
            (error) => {
                dispatch(fetchPokemonError(error));
            }
        )
    }
}

export default fetchPokemon;
