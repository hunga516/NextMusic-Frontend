import styled from "styled-components/macro"
import { Link } from "react-router-dom"

export const GenreFrame = styled(Link)`
        height: 164px;
        width: 100%;
        overflow: hidden;
        position: relative;
        border-radius: 8px;
        padding: 16px;
        text-decoration: none;
        h3 {
            font-size: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            color: rgba(255, 255, 255, 0.9);
        }
        .icon {
            width: 96px;
            height: 142px;
            position: absolute;
            bottom: -38px;
            right: -32px;
            box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.6);
            transform: rotate(-60deg);
            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
`;

export const GenreWrapper = styled.div`
    position: relative;
    z-index: 15;
    margin-top: 24px;
    display: grid;
    row-gap: 24px;
    column-gap: 24px;
`;

export const Wrapper = styled.div`
    width: 100%;
    max-height: calc(100vh - 90px);
    overflow-y: auto;
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 16px 32px;
`;

export const SearchBar = styled.div`
    max-width: 342px;
    height: 44px;
    position: relative;
    .icon {
        position: absolute;
        z-index: 10;
        top: 10px;
        left: 12px;
        svg {
            color: black;
        }
    }
    input {
        border-top: 0.3px solid rgba(0,0,0,0.18);
        border-left: 0.3px solid rgba(0,0,0,0.18); 
        border-right: 0.3px solid rgba(0,0,0,0.18); 
        border-radius: 5px;
        text-indent: 20px;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        outline: none;
        width: 100%;
        height: 100%;
        &:focus {
        border-bottom: 3px solid #2cbfff; 
        }
    }
`;