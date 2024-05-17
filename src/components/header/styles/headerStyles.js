import styled from "styled-components/macro";

export const Wrapper = styled.header`
    border-bottom: 0.3px solid rgba(0,0,0,0.18);
    height: 58px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 50;
    top: 0;
    padding: 16px;
    user-select: none;
`;

export const Navigations = styled.div`
    .radius_button {
        background: rgba(255, 255, 255, 0.9);
        padding: 6px 42px;
        border-radius: 20px;
        color: rgba(0, 0, 0, 0.8);
        &:hover {
            color: rgba(0, 0, 0, 1);
        }
    }
    a {
        transition: all 0.2s;
        text-transform: uppercase;
        text-decoration: none;
        margin: 0 16px;
        font-weight: 600;
        font-size: 15px;
        letter-spacing: 0.5px;
        color: rgba(255, 255, 255, 0.9);
        &:hover {
            color: rgba(255, 255, 255, 1);
        }
    }
    
`;
export const LocationNavigators = styled.div`
    margin-left: 12px;
    width: 86px;
    display: flex;
    justify-content: space-between;
    button {
        background-color: white;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            width: 24px;
            height: 24px;
            color: rgba(179, 179, 179, 0.9);
            stroke-width: 1.5px;
        }
    }
`;

export const UserNavigators = styled.div`
    background-color: white;
    position: relative;
    margin-right: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 6px;
    width: 180px;
    border-radius: 20px;
    transition: all 0.3s;
    svg {
        width: 20px;
        height: 20px;
    }
    span {
        margin-left: -8px;
        color: black;
    }
    &:hover {
        cursor: pointer;
        background-color: rgba(176,175,175,0.3);
    }
`;
export const DisplayPicture = styled.div`
    width: 30px;
    height: 30px;
    margin-right: 2px;
    img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
`;