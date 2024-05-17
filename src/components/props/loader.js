import React from 'react'
import styled, { keyframes } from 'styled-components/macro'

const bounce = keyframes`
    0%, 80%, 100% { 
        -webkit-transform: scale(0);
        transform: scale(0);
    } 
    40% { 
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
    }
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    max-height: calc(100vh - 90px);
    display: flex;
    align-items: center;
    justify-content: center;    
`;

export default function SpotifyLoader() {
    return (
        <Container>
            <div className="bounce bounce1" />
            <div className="bounce bounce2" />
            <div className="bounce" />
        </Container>
    )
}
