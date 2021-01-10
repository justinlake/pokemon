import { fetchRandomPokemonError, fetchRandomPokemonPending, fetchRandomPokemonSuccess } from './pokemonActions'

const fetchPokemon = (id) => {
    return dispatch => {
        dispatch(fetchRandomPokemonPending());
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => res.json())
            .then((pokemon) => {
                dispatch(fetchRandomPokemonSuccess(pokemon));
                return pokemon;
            })
            .catch(
                (error) => {
                    dispatch(fetchRandomPokemonError(error));
                }
            )
    }
}

export default fetchPokemon;
