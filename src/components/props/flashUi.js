import React from 'react'
// styled-components
import styled, { css, keyframes } from 'styled-components/macro'

const faded = keyframes`
    0% { opacity: 0 };
    100% { opacity: 1 };
`;

const Container = styled.div`
    border: 0.5px solid black;
    padding: 11px 42px;
    background: white;
    position: fixed;
    z-index: 100;
    bottom: 82px;
    left: 56.9%;
    transform: translateX(-50%);
    color: black;
    border-radius: 5px;
    animation: ${props => props.popup && css`${faded} ease-in 1s`};
`;

export default function FlashUi({ popup, message }) {
    return (
        <Container popup={popup}>
            {message}
        </Container>
    )
}
