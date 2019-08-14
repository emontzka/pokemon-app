import { getInitialData, getRandomPokemon } from '../api/api'

export const ADD_POKEMON = 'ADD_POKEMON'
export const DELETE_POKEMON = 'DELETE_POKEMON'
export const GENERATE_POKEMON = 'GENERATE_POKEMON'

export function addPokemon (pokeType, payload) {
    return {
        type: ADD_POKEMON,
        pokeType,
        payload
    }
}
export function deleteRandomPokemon (pokeType) {
    return {
        type: DELETE_POKEMON,
        pokeType
    }
}

//thunks

export function handleInitialPokemon() {
    return(dispatch) => {
        return getInitialData()
            .then(pokemon => {
                pokemon.forEach(p => {
                    dispatch(addPokemon('initialPoke', p))
                })
            })
    }
}

export function handleGeneratePokemon() {
    return(dispatch) => {
        return getRandomPokemon()
            .then(pokemon => dispatch(addPokemon('randomPoke',pokemon)))
    }
}