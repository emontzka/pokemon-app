import React from 'react'
import styled from 'styled-components'

const PokemonContainer = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    padding: 15px;
    margin: 0 20px;
    width: 200px;
    margin-bottom: 30px;
`

export default function Pokemon(props) {

    const {experience, name, height, image, weight} = props.data
    return (
        <PokemonContainer>
            <h2 style={{textTransform: "capitalize"}}>{name}</h2>
            <img src={image} />
                <p>height: {height}<br />
                weight: {weight}<br />
                experience: {experience}</p>
        </PokemonContainer>
    )
}
