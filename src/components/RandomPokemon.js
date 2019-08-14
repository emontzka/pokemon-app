import React from 'react'
import { connect } from 'react-redux'
import Pokemon from './Pokemon'
import { handleGeneratePokemon, deleteRandomPokemon } from '../actions/pokemon'


function RandomPokemon(props) {
    console.log('random props ',props)
    const buttonText = props.randomPoke  ? 'Change Pokemon' : 'Generate Pokemon'
    const poke = props.randomPoke ? props.randomPoke[Object.keys(props.randomPoke)[0]] : null
    console.log('poke is ', poke)
    function handleRandomPokemon() {
        if (props.randomPoke !== null) {
            async function change() {
                await props.dispatch(deleteRandomPokemon('randomPoke'))
                await props.dispatch(handleGeneratePokemon())
            }
            change()
        } else {
            props.dispatch(handleGeneratePokemon())
        }
    }
    return (
        <div>
            <button onClick={() => handleRandomPokemon()}>{buttonText}</button>
            <div style={{minHeight: 230}}>
                {poke &&  (
                    <Pokemon key={poke.id} data={poke} />      
                )}
            </div>
        </div>
    )
}

function mapStateToProps({randomPoke}) {
    return { randomPoke }
}


export default connect(mapStateToProps)(RandomPokemon)
