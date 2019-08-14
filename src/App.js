import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialPokemon } from './actions/pokemon'
import './App.css'
import Pokemon from './components/Pokemon'
import RandomPokemon from './components/RandomPokemon';
import Header from './components/Header'
import Loader from './components/Loader'
import styled from 'styled-components'



const InitialPokeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30x;
`

const RandomPokeContainer = styled.div`
  display: flex;
  justify-content: center;
`

class  App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFetching: false
    }
  }

  componentDidMount() {
    this.setState({isFetching: true}, async () => {
      try {
        await this.props.dispatch(handleInitialPokemon())
        this.setState({isFetching: false})
      } catch (e) {
        console.error(e)
        this.setState({isFetching: false})
      }
    })
    
  }

  render() {
    console.log('props: ',this.props)
    const {initialPoke} = this.props
    return (
      <div className="App">
        <Header />
        <InitialPokeContainer>
          {this.state.isFetching && <Loader />}
          {initialPoke && (Object.keys(initialPoke).map(poke => {
            return <Pokemon key={poke} data={initialPoke[poke]} />
          }))}
        </InitialPokeContainer>
        <RandomPokeContainer>
          <RandomPokemon />
        </RandomPokeContainer>
      </div>
    );
  }
}

function mapStateToProps({initialPoke}) {
  return {initialPoke}
}

export default connect(mapStateToProps)(App);
