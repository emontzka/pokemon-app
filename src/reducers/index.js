import { ADD_POKEMON, DELETE_POKEMON } from '../actions/pokemon'

const initialState = {
    initialPoke: null,
    randomPoke: null
}

export default function pokemon(state = initialState, {type, pokeType, payload})  {
    switch (type) {
        case ADD_POKEMON:
            return {
                ...state,
                [pokeType]: {
                    ...state[pokeType],
                    [payload.id]: {
                        name: payload.name,
                        height: payload.height,
                        weight: payload.weight,
                        experience: payload.base_experience,
                        image: payload.sprites.front_default,
                        id: payload.id
                    }
                }
           };
        case DELETE_POKEMON:
            return {
                ...state,
                [pokeType]: null
            }
        default: 
           return state;
    }
}
