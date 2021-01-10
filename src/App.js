import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import fetchPokemonAction from './actions/fetchPokemon';
import fetchRandomPokemon from './actions/fetchRandomPokemon';
import Pokemon from './components/Pokemon';
import PokemonList from './components/PokemonList';

import './app.css';

class App extends React.Component {
    componentDidMount() {
        this.props.fetchPokemon(1);
        this.props.fetchPokemon(4);
        this.props.fetchPokemon(7);
    }
    
    getRandomPokemon() {
        const number = Math.floor(Math.random() * 151 + 1);
        this.props.fetchRandomPokemon(number);
    };

    render() {
        const { error, pending, pokemonList, randomError, randomPending, randomPokemon } = this.props;

        return (
            <div className="app">
                { error && <p>{ error }</p> }
                { !pending ? (
                    <>
                        { pokemonList && <PokemonList pokemonList={ pokemonList } /> }
                        { !randomPending ? 
                            <button onClick={ () => this.getRandomPokemon() }>
                                Random Pokemon
                            </button>
                            : <p>Loading Random Pokemon</p>
                        }
                        { randomError && <p>{ randomError }</p> }
                        { randomPokemon &&
                            <>
                                <Pokemon
                                    baseExperience={ randomPokemon.base_experience }
                                    height={ randomPokemon.height }
                                    key={ randomPokemon.id }
                                    name={ randomPokemon.name }
                                    sprite={ randomPokemon.sprites.front_default }
                                    weight={ randomPokemon.weight }
                                />
                            </>
                        }
                    </>
                ) : <p>Loading Pokemon List</p> }
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchPokemon: fetchPokemonAction,
    fetchRandomPokemon: fetchRandomPokemon
}, dispatch);

const mapStateToProps = (state) => {
    const { error, pending, pokemonList, randomError, randomPending, randomPokemon } = state.pokemonReducer;
    return {
        error,
        pending,
        pokemonList,
        randomError,
        randomPending,
        randomPokemon
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
