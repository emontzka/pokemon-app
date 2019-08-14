import React from 'react'
import styled from 'styled-components'
import logo from '../logo.svg'

const Container= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`



export default function Loader() {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    )
}

