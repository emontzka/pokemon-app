import React, {Component} from 'react'
import { connect } from 'react-redux'
import Pokemon from './Pokemon'
import { handleGeneratePokemon, deleteRandomPokemon } from '../actions/pokemon'
import Loader from './Loader'


class RandomPokemon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFetching: false
        }
    }

    handleRandomPokemon() {
        this.setState({isFetching: true}, async () => {
            try {
                if (this.props.randomPoke !== null) {
                    await this.props.dispatch(deleteRandomPokemon('randomPoke'))
                    await this.props.dispatch(handleGeneratePokemon())
                } else {
                    await this.props.dispatch(handleGeneratePokemon())
                }
                this.setState({isFetching: false})
            } catch (error) {
                console.log(error)
            }
        })
    }
    render() {  
            let buttonText
            if (this.state.isFetching) {
                buttonText = 'Fetching...'
            } else {
                buttonText = this.props.randomPoke  ? 'Change Pokemon' : 'Generate Pokemon'
            }
            const poke = this.props.randomPoke ? this.props.randomPoke[Object.keys(this.props.randomPoke)[0]] : null
        return (
            <div>
                <button style={{marginBottom: 20}} onClick={() => this.handleRandomPokemon()}>{buttonText}</button>
                {this.state.isFetching && <Loader />}
                <div style={{minHeight: 230}}>
                    
                    {poke &&  (
                        <Pokemon key={poke.id} data={poke} />      
                    )}
                </div>
            </div>
        )
    }
}

function mapStateToProps({randomPoke}) {
    return { randomPoke }
}


export default connect(mapStateToProps)(RandomPokemon)
