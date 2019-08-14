import React from 'react'
import styled from 'styled-components'

const Head = styled.div`
    position: fixed;
    background: green;
    color: #fff;
    height: 100px;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 100;
`

export default function Header() {
    return (
        <Head>
            <h1>Pokemon App</h1>
        </Head>
    )
}
