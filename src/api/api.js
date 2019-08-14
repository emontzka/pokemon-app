"use strict";

const apiConfig = {
    baseUrl: "https://pokeapi.co/api/v2/pokemon/",  
    pokeLength: 807,
    initialPokeIds: [7,4,1]
}

Object.freeze(apiConfig)

const {baseUrl, pokeLength, initialPokeIds} = apiConfig

function generateRandomPokeId(len) {
    return parseInt(Math.random()*len+1, 10)
}

export async function getInitialData() {
    const promises = initialPokeIds.map(p => fetch(baseUrl + p))
    try {
        return await Promise.all(promises)
        .then(responses => Promise.all(responses.map(r => r.json())))
    } catch (e) {
        console.error(e)
        alert('Error occured loading Pokemon. Please refresh the page.')
    }
}


export async function getRandomPokemon() {
    const id = generateRandomPokeId(pokeLength)
    try {
        const response = await fetch(baseUrl + id)
        const json = await response.json()
        return json
    } catch (e) {
        console.error(e)
        alert('Pokemon not generated. Please try again.')
    }
}


