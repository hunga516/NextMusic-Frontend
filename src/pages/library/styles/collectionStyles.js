import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    max-height: calc(100vh - 90px);
    overflow-y: auto;
`;

export const FrameWrapper = styled.div`
    display: grid;
    column-gap: 24px;
    row-gap: 16px;
    h4 {
        width: 300px;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 32px;
    h3 {
        margin-left: 2px;
        font-size: 22px;
        color: black;
    }
`;

export const LibraryNav = styled.div`
    width: 100%;
    display: flex;
    margin-top: -24px;
    margin-bottom: 18px;
    margin-left: -2px;
        .active {
            background: rgba(176,175,175,0.8);
            border-radius: 6px;
        }
        a {
            font-size: 16px;
            color: black;
            text-decoration: none;
            padding:8px 24px;
        }
`;