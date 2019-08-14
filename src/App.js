import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialPokemon } from './actions/pokemon'
import './App.css'
import Pokemon from './components/Pokemon'
import RandomPokemon from './components/RandomPokemon';
import Header from './components/Header'

class  App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialPokemon())
  }

  render() {
    console.log('props: ',this.props)
    const {initialPoke} = this.props
    return (
      <div className="App">
        <Header />
        <div className="initial-poke">
          {initialPoke && (Object.keys(initialPoke).map(poke => {
            return <Pokemon key={poke} data={initialPoke[poke]} />
          }))}
        </div>
        <div className="random-poke">
          <RandomPokemon />
        </div>
      </div>
    );
  }
}

function mapStateToProps({initialPoke}) {
  return {initialPoke}
}

export default connect(mapStateToProps)(App);
